import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Chart, ChartConfiguration, ChartItem, registerables } from "chart.js";

import { TvlHistoryService } from "src/app/services/api/tvl-history.service";
import { PoolsService } from "src/app/services/api/pools.service";

import { CHART_COLORS } from "src/environments/chart-colors";

@Component({
  selector: "app-chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.scss"],
})
export class ChartComponent implements OnInit {
  myChart;
  tvlToShow = "$52.6B";

  constructor(
    private tvlHistoryService: TvlHistoryService,
    private poolsService: PoolsService,
    private activatedRoute: ActivatedRoute
  ) {
    Chart.register(...registerables);
  }

  getFullDateValue(dateNumber) {
    const temp = dateNumber.toString();
    return temp.length > 1 ? temp : "0" + temp;
  }

  getPreparedDataset(dataArray, key) {
    return {
      data: dataArray.map((e) => e.tvl),
      label: key,
      timestamp: dataArray.map((e) => e.timestamp),
      clearValue: dataArray.map((e) => e.tvl),
    };
  }

  getChartLables(dataArray) {
    const tempData = dataArray.concat();
    const output = [];

    tempData.reverse();

    tempData.forEach((e) => {
      const date = new Date(+(e.timestamp + "000"));
      const hour = this.getFullDateValue(date.getHours());
      const datestring = `${hour}:00`;

      output.push(datestring);
    });

    return output;
  }

  async ngOnInit(): Promise<void> {
    let chartData;
    const poolId = this.activatedRoute.snapshot.params?.id;

    if (poolId) {
      const poolToShow = await this.poolsService.getPoolById(+poolId);
      const temp = await this.tvlHistoryService.getHistoryBySymbol(poolToShow.symbol);
      chartData = temp as any;
      this.tvlToShow = await this.poolsService.getFormattedTVL(poolToShow.id);
    } else {
      chartData = await this.tvlHistoryService.getHistory();
      this.tvlToShow = await this.poolsService.getFormattedTVL();
    }

    const labels = this.getChartLables(chartData[Object.keys(chartData)[0]]);

    const datasets = Object.keys(chartData).map((key) => {
      chartData[key].sort((a, b) => a.timestamp - b.timestamp);
      return this.getPreparedDataset(chartData[key], key);
    });

    // DESCRIPTION: sum charts values only for view
    if (datasets.length > 1) {
      datasets.map((dataset, datasetIndex) => {
        if (datasetIndex > 0) {
          dataset.data = dataset.data.map((value, index) => value + datasets[datasetIndex - 1].data[index]);
        }

        return dataset;
      });
    }

    const preparedDatasets = datasets.map((dataset, datasetIndex) => {
      const color = CHART_COLORS[datasetIndex % CHART_COLORS.length];

      return { ...dataset, borderColor: color, backgroundColor: color, tension: 0.4, fill: true };
    });

    const config: ChartConfiguration = {
      type: "line",
      data: {
        labels,
        datasets: preparedDatasets,
      },
      options: {
        responsive: true,
        elements: {
          point: {
            radius: 0.1,
            hitRadius: 20,
            hoverRadius: 0,
          },
        },
        interaction: {
          mode: "index",
          intersect: false,
        },
        scales: {
          y: {
            grace: 30,
          },
        },
        plugins: {
          legend: {
            position: "bottom",
            align: "start",
            onClick: () => {},
            labels: {
              padding: 35,
              boxWidth: 16,
              boxHeight: 16,
              color: "#24126A",
              font: {
                family: "'Helvetica'",
                size: 16,
              },
            },
          },
          tooltip: {
            callbacks: {
              label: (context: any) => {
                const tokenName = context.dataset.label;
                const clearValue = new Intl.NumberFormat("en-US").format(context.dataset.clearValue[context.dataIndex]);
                return `${tokenName}: ${clearValue}`;
              },
              title: (context: any) => {
                function getFullDateValue(value) {
                  const temp = value.toString();
                  return temp.length > 1 ? temp : "0" + temp;
                }

                const newContext = context[0];
                let title = newContext.label || "";

                const date = new Date(+(newContext.dataset.timestamp[newContext.dataIndex] + "000"));
                const day = getFullDateValue(date.getDate());
                const month = getFullDateValue(date.getMonth() + 1);

                if (title) {
                  title += ` ${day}.${month}`;
                }

                return title;
              },
            },
          },
        },
      },
    } as ChartConfiguration;

    const ctx = document.getElementById("myChart") as ChartItem;

    this.myChart = new Chart(ctx, config);
  }
}

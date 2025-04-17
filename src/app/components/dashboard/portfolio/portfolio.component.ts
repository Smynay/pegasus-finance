import { Component, OnInit } from "@angular/core";
import { Chart, ChartItem, registerables } from "chart.js";

import { BalanceService } from "src/app/services/api/balance.service";

import { CHART_COLORS } from "src/environments/chart-colors";

@Component({
  selector: "app-portfolio",
  templateUrl: "./portfolio.component.html",
  styleUrls: ["./portfolio.component.scss"],
})
export class PortfolioComponent implements OnInit {
  myChart;
  userPortfolio?: any = null;
  dataToView: any;
  chartColors = CHART_COLORS;
  portfolioPartOne: any;
  portfolioPartTwo: any;

  constructor(private balanceService: BalanceService) {
    Chart.register(...registerables);
  }

  async ngOnInit(): Promise<void> {
    const userBalance = await this.balanceService.getAll();

    const generalCount = userBalance.reduce((sum, e) => e.shares + sum, 0);
    const datasetData = userBalance.map((e) => ((e.shares / generalCount) * 100).toFixed(1));
    const fullPrices = userBalance.map((e) => (e.shares * e.sharePrice).toFixed(2));
    const generalPrice = fullPrices.reduce((sum, e) => sum + +e, 0);

    this.userPortfolio = userBalance.map((e, index) => ({
      ...e,
      percentage: datasetData[index],
      fullPrice: fullPrices[index],
      generalCount,
      generalPrice: generalPrice.toFixed(2),
    }));

    this.portfolioPartOne = this.userPortfolio.slice(0, 2);
    this.portfolioPartTwo = this.userPortfolio.slice(2);

    const chartData = {
      labels: userBalance.map((e) => e.pool),
      datasets: [
        {
          label: "Dataset 1",
          data: datasetData,
          backgroundColor: this.chartColors,
          tension: 0.4,
        },
      ],
    };

    const config = {
      type: "pie",
      data: chartData,
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
            position: "top",
          },
          title: {
            display: false,
            text: "Chart.js Pie Chart",
          },
        },
      },
    };

    const ctx = document.getElementById("myPie") as ChartItem;

    this.myChart = new Chart(ctx, config as any);
  }
}

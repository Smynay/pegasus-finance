import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { MaterialModule } from "./modules/material/material.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/home/header/header.component";
import { BlogCardComponent } from "./components/home/blog-card/blog-card.component";
import { FooterComponent } from "./components/home/footer/footer.component";
import { SimpleCardComponent } from "./components/home/simple-card/simple-card.component";
import { DashboardHeaderComponent } from "./components/dashboard/header/header.component";
import { ChartComponent } from "./components/dashboard/chart/chart.component";
import { PortfolioComponent } from "./components/dashboard/portfolio/portfolio.component";
import { PotfolioSectionComponent } from "./sections/potfolio-section/potfolio-section.component";
import { CardComponent } from "./components/dashboard/card/card.component";
import { PoolCardComponent } from "./components/pool/card/card.component";
import { ActionFormComponent } from "./components/pool/action-form/action-form.component";
import { SnackbarComponent } from "./components/notification/snackbar/snackbar.component";
import { LanguageSelectorComponent } from "./components/language-selector/language-selector.component";
import { PopupComponent } from "./components/notification/popup/popup.component";
import { WalletConnectComponent } from "./components/wallet-connect/wallet-connect.component";

import { HomeComponent } from "./views/home/home.component";
import { DashboardComponent } from "./views/dashboard/dashboard.component";
import { PoolComponent } from "./views/pool/pool.component";

import { MainSectionComponent } from "./sections/main-section/main-section.component";
import { PoolsSectionComponent } from "./sections/pools-section/pools-section.component";
import { AboutSectionComponent } from "./sections/about-section/about-section.component";
import { FeaturesSectionComponent } from "./sections/features-section/features-section.component";
import { PartnersSectionComponent } from "./sections/partners-section/partners-section.component";
import { BlogSectionComponent } from "./sections/blog-section/blog-section.component";
import { TotalValueSectionComponent } from "./sections/total-value-section/total-value-section.component";
import { PoolsDashboardSectionComponent } from "./sections/pools-dashboard-section/pools-dashboard-section.component";
import { PoolFormComponent } from "./sections/pool-form/pool-form.component";
import { AltcoinsSectionComponent } from "./sections/altcoins-section/altcoins-section.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    MainSectionComponent,
    PoolsSectionComponent,
    SimpleCardComponent,
    AboutSectionComponent,
    FeaturesSectionComponent,
    PartnersSectionComponent,
    BlogSectionComponent,
    BlogCardComponent,
    FooterComponent,
    DashboardComponent,
    DashboardHeaderComponent,
    TotalValueSectionComponent,
    ChartComponent,
    PortfolioComponent,
    PotfolioSectionComponent,
    PoolsDashboardSectionComponent,
    CardComponent,
    PoolCardComponent,
    PoolComponent,
    PoolFormComponent,
    ActionFormComponent,
    AltcoinsSectionComponent,
    LanguageSelectorComponent,
    SnackbarComponent,
    PopupComponent,
    WalletConnectComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MaterialModule, BrowserAnimationsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

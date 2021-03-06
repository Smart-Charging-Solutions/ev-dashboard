import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';

import { MaterialModule } from '../../app.module';
import { DialogService } from '../../services/dialog.service';
import { ComponentModule } from '../component/component.module';
import { ConsumptionChartComponent } from '../component/consumption-chart/consumption-chart.component';
import { ErrorCodeDetailsComponent } from '../component/error-code-details/error-code-details.component';
import { AppConnectorIdPipe } from '../formatters/app-connector-id.pipe';
import { FormattersModule } from '../formatters/formatters.module';
import { TableModule } from '../table/table.module';
import { AssetsDialogTableDataSource } from './assets/assets-dialog-table-data-source';
import { AssetsDialogComponent } from './assets/assets-dialog.component';
import { CarCatalogsDialogTableDataSource } from './car-catalogs/car-catalogs-dialog-table-data-source';
import { CarCatalogsDialogComponent } from './car-catalogs/car-catalogs-dialog.component';
import { CarMakersTableDataSource } from './car-makers/car-makers-dialog-table-data-source';
import { CarMakersDialogComponent } from './car-makers/car-makers-dialog.component';
import { ChargingStationsDialogTableDataSource } from './charging-stations/charging-stations-dialog-table-data-source';
import { ChargingStationsDialogComponent } from './charging-stations/charging-stations-dialog.component';
import { CompaniesDialogTableDataSource } from './companies/companies-dialog-table-data-source';
import { CompaniesDialogComponent } from './companies/companies-dialog.component';
import { ConfirmationDialogComponent } from './confirmation/confirmation-dialog.component';
import { ErrorCodeDetailsDialogComponent } from './error-code-details/error-code-details-dialog.component';
import { GeoMapDialogComponent } from './geomap/geomap-dialog.component';
import { LogActionsDialogTableDataSource } from './logs/log-actions-dialog-table-data-source';
import { LogActionsDialogComponent } from './logs/log-actions-dialog.component';
import { ReportsDialogTableDataSource } from './reports/reports-dialog-table-data-source';
import { ReportsDialogComponent } from './reports/reports-dialog.component';
import { SiteAreasDialogTableDataSource } from './site-areas/site-areas-dialog-table-data-source';
import { SiteAreasDialogComponent } from './site-areas/site-areas-dialog.component';
import { SitesDialogTableDataSource } from './sites/sites-dialog-table-data-source';
import { SitesDialogComponent } from './sites/sites-dialog.component';
import { UsersDialogTableDataSource } from './users/users-dialog-table-data-source';
import { UsersDialogComponent } from './users/users-dialog.component';

export class FooterModule {
}

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    MaterialModule,
    TableModule,
    TranslateModule,
    ComponentModule,
    FormattersModule,
    AgmCoreModule,
    GooglePlaceModule,
  ],
  declarations: [
    CarMakersDialogComponent,
    SitesDialogComponent,
    UsersDialogComponent,
    ConfirmationDialogComponent,
    ChargingStationsDialogComponent,
    SiteAreasDialogComponent,
    AssetsDialogComponent,
    CompaniesDialogComponent,
    GeoMapDialogComponent,
    ErrorCodeDetailsDialogComponent,
    ErrorCodeDetailsComponent,
    ReportsDialogComponent,
    CarCatalogsDialogComponent,
    LogActionsDialogComponent
  ],
  entryComponents: [
    CarMakersDialogComponent,
    SitesDialogComponent,
    UsersDialogComponent,
    ConfirmationDialogComponent,
    ChargingStationsDialogComponent,
    SiteAreasDialogComponent,
    AssetsDialogComponent,
    CompaniesDialogComponent,
    ConsumptionChartComponent,
    GeoMapDialogComponent,
    ErrorCodeDetailsDialogComponent,
    ErrorCodeDetailsComponent,
    ReportsDialogComponent,
    CarCatalogsDialogComponent,
    LogActionsDialogComponent
  ],
  exports: [
    CarMakersDialogComponent,
    SitesDialogComponent,
    UsersDialogComponent,
    ConfirmationDialogComponent,
    ChargingStationsDialogComponent,
    SiteAreasDialogComponent,
    AssetsDialogComponent,
    CompaniesDialogComponent,
    GeoMapDialogComponent,
    ErrorCodeDetailsDialogComponent,
    ErrorCodeDetailsComponent,
    ReportsDialogComponent,
    CarCatalogsDialogComponent,
    LogActionsDialogComponent
  ],
  providers: [
    AppConnectorIdPipe,
    DialogService,
    ChargingStationsDialogTableDataSource,
    CompaniesDialogTableDataSource,
    SiteAreasDialogTableDataSource,
    SitesDialogTableDataSource,
    AssetsDialogTableDataSource,
    UsersDialogTableDataSource,
    ChargingStationsDialogTableDataSource,
    SitesDialogTableDataSource,
    SiteAreasDialogTableDataSource,
    CompaniesDialogTableDataSource,
    ReportsDialogTableDataSource,
    CarMakersTableDataSource,
    CarCatalogsDialogTableDataSource,
    LogActionsDialogTableDataSource
  ],
})
export class DialogsModule {
}

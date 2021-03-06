import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CentralServerService } from 'app/services/central-server.service';
import { DialogService } from 'app/services/dialog.service';
import { MessageService } from 'app/services/message.service';
import { SpinnerService } from 'app/services/spinner.service';
import { TableSynchronizeAction } from 'app/shared/table/actions/table-synchronize-action';
import { CarButtonAction } from 'app/types/Car';
import { ButtonType, TableActionDef } from 'app/types/Table';
import { Utils } from 'app/utils/Utils';

export class TableSyncCarCatalogsAction extends TableSynchronizeAction {
  public getActionDef(): TableActionDef {
    return {
      ...super.getActionDef(),
      id: CarButtonAction.SYNCHRONIZE,
      name: 'settings.car.synchronize_car_catalogs',
      action: this.synchronizeCarCatalogs,
    };
  }

  private synchronizeCarCatalogs(dialogService: DialogService, translateService: TranslateService, messageService: MessageService,
    centralServerService: CentralServerService, spinnerService: SpinnerService, router: Router) {
    dialogService.createAndShowYesNoDialog(
      translateService.instant('settings.car.synchronize_car_catalogs_dialog_title'),
      translateService.instant('settings.car.synchronize_car_catalogs_dialog_confirm'),
    ).subscribe((response) => {
      if (response === ButtonType.YES) {
        spinnerService.show();
        centralServerService.synchronizeCarsCatalog().subscribe((synchronizeResponse) => {
          spinnerService.hide();
          if (synchronizeResponse.inError) {
            messageService.showErrorMessage(
              translateService.instant('cars.synchronize_car_catalogs_partial',
                {
                  synchronized: synchronizeResponse.inSuccess,
                  inError: synchronizeResponse.inError,
                },
              ));
          } else if (synchronizeResponse.inSuccess === 0) {
            messageService.showSuccessMessage(
              translateService.instant('cars.synchronize_car_catalogs_up_to_date'));
          } else {
            messageService.showSuccessMessage(
              translateService.instant('cars.synchronize_car_catalogs_success',
                { synchronized: synchronizeResponse.inSuccess },
              ));
          }
        }, (error) => {
          spinnerService.hide();
          Utils.handleHttpError(error, router, messageService, centralServerService, 'cars.synchronize_car_catalogs_error');
        });
      }
    });
  }
}

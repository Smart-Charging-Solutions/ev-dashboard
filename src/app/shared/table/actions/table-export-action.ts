import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CentralServerService } from 'app/services/central-server.service';
import { DialogService } from 'app/services/dialog.service';
import { MessageService } from 'app/services/message.service';
import { SpinnerService } from 'app/services/spinner.service';
import { ButtonAction, FilterParams } from 'app/types/GlobalType';
import { ButtonColor, ButtonType, TableActionDef } from 'app/types/Table';
import { Utils } from 'app/utils/Utils';
import * as FileSaver from 'file-saver';
import { Observable } from 'rxjs';

import { TableAction } from './table-action';

export class TableExportAction implements TableAction {
  private action: TableActionDef = {
    id: ButtonAction.EXPORT,
    type: 'button',
    icon: 'cloud_download',
    name: 'general.export',
    color: ButtonColor.PRIMARY,
    tooltip: 'general.tooltips.export',
    action: this.export
  };

  // Return an action
  public getActionDef(): TableActionDef {
    return this.action;
  }

  protected export(filters: FilterParams, exportedFilename: string, messageTitle: string, messageConfirm: string,
      messageError: string, exportData: (filters: FilterParams) => Observable<Blob>,
      dialogService: DialogService, translateService: TranslateService, messageService: MessageService,
      centralServerService: CentralServerService, spinnerService: SpinnerService, router: Router) {
    dialogService.createAndShowYesNoDialog(
      translateService.instant(messageTitle),
      translateService.instant(messageConfirm),
    ).subscribe((response) => {
      if (response === ButtonType.YES) {
        spinnerService.show();
        exportData(filters).subscribe((result) => {
            spinnerService.hide();
            FileSaver.saveAs(result, exportedFilename);
        }, (error) => {
          spinnerService.hide();
          Utils.handleHttpError(error, router, messageService,
            centralServerService, translateService.instant(messageError));
        });
      }
    });
  }
}

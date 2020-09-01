import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './tables-routing.module';

import { SmartTableService } from '../../@core/data/smart-table.service';
import { FundService } from '../../services/fund.service';
import { FileService } from '../../services/file.service';


@NgModule({
  imports: [
    ThemeModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
    FundService,  
    FileService,
    SmartTableService,
  ],
})
export class TablesModule { }

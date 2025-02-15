import { NgxBarcodeModule } from "ngx-barcode";
import { NgxMatSelectSearchModule } from "ngx-mat-select-search";
import { NgxPrintModule } from "ngx-print";
import { FormModule } from "./form/form.module";
import { NgxOpenmrsLocationTreeModule } from "./location-tree/location-tree.module";
import { MatSelectSearchModule } from "./mat-select-search/mat-select-search.module";
import { NgxOpenmrsHttpclientServiceModule } from "./openmrs-http-client/ngx-openmrs-httpclient-service.module";
import { NgxStandardReportModule } from "./standard-report/standard-report.module";

export const modules: any[] = [
  NgxOpenmrsHttpclientServiceModule,
  FormModule,
  NgxBarcodeModule,
  NgxOpenmrsLocationTreeModule,
  NgxPrintModule,
  NgxStandardReportModule,
  MatSelectSearchModule,
  NgxMatSelectSearchModule,
];

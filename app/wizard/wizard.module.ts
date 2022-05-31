import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardComponent } from './wizard.component';
import { PageOneComponent } from './page-one/page-one.component';
import { MatTabsModule } from '@angular/material/tabs';
import { PageTwoComponent } from './page-two/page-two.component';

@NgModule({
  imports: [CommonModule, MatTabsModule],
  exports: [WizardComponent],
  declarations: [WizardComponent, PageOneComponent, PageTwoComponent],
})
export class WizardModule {}

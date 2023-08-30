/** Angular core */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

/** Forms */
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

/** Http */
import { HttpClientModule } from '@angular/common/http'

/** Shared Module */
import { SharedRoutingModule, TranslationPipe } from '@shared/index'

@NgModule({
  declarations: [TranslationPipe],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    TranslationPipe
  ]
})
export class SharedModule { }

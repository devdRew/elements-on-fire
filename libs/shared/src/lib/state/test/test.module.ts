import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { testReducer } from "./test.reducer";

@NgModule({
  imports: [
    StoreModule.forFeature('test', testReducer),
  ],
  exports: [],
  declarations: [],
  providers: []
})
export class TestModule {
}

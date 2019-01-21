import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { TestModule } from "./test/test.module";
import { metaReducers } from "./root.reducer";
import { TestEffects } from './test/test.effects';

const features = [TestModule];

@NgModule({
  imports: [
    ...features,
    StoreModule.forRoot({}, { metaReducers }),
    EffectsModule.forRoot([TestEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 10 }),
  ],
  exports: []
})
export class StateModule {}

import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { UserPage } from '../pages/user/user';
import { SignupPage } from '../pages/signup/signup';
import { ContactPage } from '../pages/contact/contact';
import { MomentPage } from '../pages/moment/moment';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ContactPage,
    MomentPage,
    TabsPage,
    SignupPage,
    UserPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    ContactPage,
    MomentPage,
    TabsPage,
    SignupPage,
    UserPage
  ],
  providers: []
})
export class AppModule {}

import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AmazonServiceProvider } from '../providers/amazon-service/amazon-service';
import { BestBuyServiceProvider } from '../providers/best-buy-service/best-buy-service';
import { EbayServiceProvider } from '../providers/ebay-service/ebay-service';
import { MacysServiceProvider } from '../providers/macys-service/macys-service';
import { WalmartServiceProvider } from '../providers/walmart-service/walmart-service';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AmazonServiceProvider,
    BestBuyServiceProvider,
    EbayServiceProvider,
    MacysServiceProvider,
    WalmartServiceProvider
  ]
})
export class AppModule {}

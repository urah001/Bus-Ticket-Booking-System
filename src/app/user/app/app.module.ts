import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap';
import {FormsModule} from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from '../../app.component';
import { UserComponent } from '../user.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SelectBusComponent } from '../select-bus/select-bus.component';
import { SelectSeatComponent } from '../select-seat/select-seat.component';
import { BusSearchResultComponent } from '../bus-search-result/bus-search-result.component';
import { SelectBusService } from '../services/selectBus.service';
import { UserFormComponent } from '../user-form/user-form.component';
import { BookingService } from '../services/booking.service';
import { UserService } from '../services/user.service';
import { PrintComponent } from '../print/print.component';
//import { LoginComponent } from '../../login.component';
import { AuthService } from '../services/auth.service';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';


const userRoute:Routes=[
{path:'',component:SelectBusComponent},
{path:'search',component:BusSearchResultComponent},
{path:'user-form',component:UserFormComponent},
{path:'print',component:PrintComponent},
//{ path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect root to /login
{path:'/login',component:LoginComponent},
{path:'/register',component:RegisterComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeaderComponent,
    FooterComponent,
    SelectBusComponent,
    SelectSeatComponent,
    BusSearchResultComponent,
    UserFormComponent,
    PrintComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(userRoute),
    HttpClientModule,
    ModalModule.forRoot(),
    FormsModule
  ],
  providers: [
    SelectBusService,
    BookingService,
    UserService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

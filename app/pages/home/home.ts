import {Component, NgZone} from "@angular/core";
import {NavController, Platform} from 'ionic-angular';
import {StarterService} from '../../services/starter.service';


@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {


    constructor(private starterService: StarterService,
        private nav: NavController,
        private platform: Platform,
        private zone: NgZone) {

    }

    ionViewLoaded() {
        this.platform.ready().then(() => {
          //Do Here which you want should happen as app starts

        });
    }
    ourData:any;
    getData() {

      this.starterService.getData().then(function(res){

        console.log("gettting it ",res);
      });
    }
}
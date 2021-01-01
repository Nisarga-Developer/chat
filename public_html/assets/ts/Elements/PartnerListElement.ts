import { App } from "../app.js";
import { IPartner } from "../Partner/IPartner.js";
import { IPartners } from "../Partner/IPartners.js";

declare var Vue: any;

export class PartnerListElement{

    app: App;
    partner: IPartner;
    partnerListElementVueObject: any; 

    constructor(partner: IPartner){
        this.partner = partner;
        this.addCodeToVideoElement();
        this.setVueElement();
    }

    addCodeToVideoElement(){
        $("#partnerlist ul").append(`
            <li id="partnerlistelement-${this.partner ? this.partner.id : 0}" v-bind:class="{'unconnected': !connected}">
                {{ name }} 
                <span v-bind:class="{'on': !muted}" class="microphone fas fa-microphone-slash"></span> 
                <span v-bind:class="{'on': !cameraOff}" class="camera fas fa-video-slash"></span>
                <span v-bind:class="{'on': !screenSharing}" class="screen fas fa-desktop"></span>
            </li>
        `);
    }

    setVueElement(){
        let cla = this;
        this.partnerListElementVueObject = new Vue({
            el: "#partnerlistelement-" + (cla.partner ? cla.partner.id : 0),
            data: {
                name: cla.partner ? cla.partner.getName() : "Du",
                muted: false,
                connected: true,
                cameraOff: false,
                screenSharing: false
            },
            methods: { 
            }
        });
    }

}
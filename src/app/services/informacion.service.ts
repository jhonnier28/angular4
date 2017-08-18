import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class InformacionService {

        info:any = {}; //informacion del sevicio que consume los datos del archivo json.
        cargada:boolean = false; //confirmar si ya cargo el servicio.
        cargada_sobre_nosotros:boolean = false;
        equipo:any[] =[];

        constructor( public http:Http ) {
          this.carga_info();
          this.carga_sobre_nosotros();
        }

        public carga_info(){
          this.http.get("assets/data/info.pagina.json").
                         subscribe(data => {
                           //console.log(data.json());
                           this.cargada = true;
                           this.info = data.json();
                        })
        }

        public carga_sobre_nosotros(){
          this.http.get("https://portafolio-54f39.firebaseio.com/equipo.json").
                         subscribe(data => {
                           console.log(data.json());
                           this.cargada_sobre_nosotros = true;
                           this.equipo = data.json();
                        })
        }
}

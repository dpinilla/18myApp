import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConexionService } from '../services/conexion.service';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})
export class DatosPage implements OnInit {
  nombre:string = ""
  datos:Array<any> = []
  constructor(private activateRoute: ActivatedRoute,
              private router:Router,
              private conexion: ConexionService) { }

  

  ngOnInit() {
    this.nombre = this.activateRoute.snapshot.paramMap.get('id')
    this.visualizaDatos()
  }

  visualizaDatos(){
    this.conexion.consultaDatos().subscribe(
      data => {
        this.datos = data
      }, error => {console.log(error)}
    )
    /* this.datos = [
      {
        nombre: "Diego",
        apellido: "Pinilla",
        edad: 30,
        deporte: "Futbol",
        imagen: "https://sites.google.com/site/futbolactual2/_/rsrc/1472871443262/config/customLogo.gif?revision=4"
      },
      {
        nombre: "Alberto",
        apellido: "Hernández",
        edad: 16,
        deporte: "Natación",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkJGfGnxCaCosuWo_sMgPxjsXpZn0UH3AI-w&usqp=CAU"
      },
      {
        nombre: "Luz Marina",
        apellido: "Casañas",
        edad: 25,
        deporte: "Tenis",
        imagen: "https://s1.eestatic.com/2022/05/09/curiosidades/671193344_224164947_1024x576.jpg"
      }
    ] */
  }

  interface(i){
    console.log("prb:"+this.datos[i].deporte)
    if(this.datos[i].deporte === "Futbol"){

      this.router.navigate(['../futbol'])
    } else if(this.datos[i].deporte === "Natación"){

    }else if(this.datos[i].deporte === "Tenis"){

    }
  }

}

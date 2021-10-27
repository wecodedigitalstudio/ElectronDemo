import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Gaia 2.0';

	constructor(
		private config: PrimeNGConfig,
		public router: Router
	) { }


	ngOnInit(): void {
			
		// https://primefaces.org/primeng/showcase/#/i18n
		this.config.setTranslation({
			accept: 'Si',
			reject: 'No',
			dayNames: ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"],
			dayNamesShort: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
			dayNamesMin: ["Do", "Lu", "Ma", "Me", "Gi", "Ve", "Sa"],
			monthNames: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
			monthNamesShort: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Sett", "Ott", "Nov", "Dic"],
			today: "Oggi",
			weekHeader: "Sett",
			startsWith: "Inizia con",
			contains: "Contiene",
			notContains: "Non contiene",
			endsWith: "Finisce per",
			equals: "Uguale a",
			notEquals: "Non uguale a",
			noFilter: "Nessun filtro",
			lt: "Minore di",
			lte: "Minore o uguale di",
			gt: "Maggiore di",
			gte: "Maggiore o uguale di",
			is: "E'",
			isNot: "Non è",
			before: "Prima",
			after: "Dopo",
			clear: "Pulisci",
			apply: "Applica",
			matchAll: "Match All",
			matchAny: "Match Any",
			addRule: "Aggiungi regola",
			removeRule: "Rimuovi regola",
			choose: "Scegli",
			upload: "Carica",
			cancel: "Annulla",
			//translations
		});  
  }
}

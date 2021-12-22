import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  public data = [
    {id: 1, name:"Ergonomischer Bürostuhl", price:"399,00€", description: "Der beliebte Bürostuhl Ergotopia sorgt für entspannte Muskulatur im gesamten Nacken- und Rückenbereich und bringt damit endlich Linderung bei lästigen Schmerzen."},
    {id: 2, name:"Höhenverstellbarer Schreibtisch", price:"339,90€", description: "Abwechslungsreiche Arbeitspositionen fördern sowohl das Wohlbefinden als auch die Effizienz am Arbeitsplatz. Sie entlasten die Wirbelsäule vom unteren Rücken, über die Schultern bis hin zum Nacken und reduzieren so bildschirmbedingte Fehlhaltungen. Genau das ist die Stärke der höhenverstellbaren Schreibtische."},
    {id: 3, name:"Gaming Tastatur", price:"120,00€", description: "Die Gaming-Tastatur mit Mechanical-Schaltern der nächsten Generation für konkurrenzlose Geschwindigkeit sowie einer Tastenstabilisator-Leiste für gerades, konsistentes Auslösen ohne Widerstand."},
    {id: 4, name:"Meal Prep Container", price:"12,00€", description: "Das Produkt zeichnet sich durch seine robuste und stabile Bauweise aus. Mit einem großen sowie zwei mittelgroßen Fächern hast du ausreichend Platz für dein Essen. Hergestellt aus widerstandsfähigem Material (PP)."},
    {id: 5, name:"Laptop-Rucksack", price:"25,99€", description: "Laptoptaschen sind für Ihren Laptop entworfen, um ihm maximale Sicherheit zu bieten. Es kommt mit iPad-Tasche, Stifttasche, Powerbank-Tasche, Maus, Ladegerät, Ordner, Bücher, Kleidung, die Ihnen helfen, Ihre Sachen systematisch zu organisieren."},
    {id: 6, name:"Roboter Staubsauger", price:"279,00€", description: "Der leistungsstarke Staubsauger in Kombination mit dem integrierten Wischmopp kümmert sich um jede Art von Verschmutzung, ob Staub, Krümel oder Flüssigkeiten. Hinweis: Die nasse Wischmopp-Funktion ist speziell für die Reinigung von Hartböden und leider nicht für die Reinigung von Teppichen geeignet."}
  ]

  constructor() { }

  getData(){
    return this.data;
  }

  getProductInformationWithId(id: number){
    return this.data.find(o => o.id === id);
  }

}

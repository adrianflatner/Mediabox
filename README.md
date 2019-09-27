# REACT

Prosjektet ble startet ved hjelp av create-react-app. Fra dette har vi lagd alle komponentene og UI-elementene fra bunnen av. Nettsiden benytter seg av tre komponenter: Navbar, Tools, og Media. Navbar ligger øverst i hierarkiet og inneholder logikk for navbaren øverst på siden, samt knappene for lagring og henting av favorittkombinasjon. Tools-komponenten rendres av Navbar og inneholder logikk for lagring av staten til komponenten i både session- og localStorage, samt behandler all informasjonen fra kontrollpanelet nederst på siden. Nederst i hierarkiet har vi Images. Images benytter seg av fetch() for å hente ut filene, for så å diplaye de til brukeren.

Vi har valgt å strukturere komponentene slik for å gjøre det enkelt å endre states, samt sende props videre nedover. Andre plasseringer av f.eks. knappene for lagring gjorde det vanskeligere å endre state i navbar siden informasjonen ikke kan enkelt sendes fra en child til parent component. 

# AJAX

Bilder og tekst blir lastet med AJAX ved hjelp innebygd funksjonalitet i React. De blir altså hentet ved hjelp av fetch() hvor filene er adressert og plukket opp fra “public”-folderen. Lydene er hentet direkte fra “public” og spilt av med audiotagen fra HTML5. Hver gang state endres kalles fetch()-funksjonene på nytt for å laste inn riktig filer. Når det gjelder musikkspilleren, så stoppes musikken, lastes og spilles av på nytt hver gang staten endres. Alle fetch()-funksjoner bruker dynamiske adresser slik at alt håndteres uten error. 

# HTML WEB STORAGE

Vi har valgt å bruke sessionStorage som en form for automatisk lagring av det brukeren gjør på siden. Hver gang brukeren trykker på en checkbox eller bytter fane (altså componentDidUpdate()) lagrer nettsiden alle valgene i sessionStorage. Dette gjør at ingenting skjer med valgene til brukeren skulle siden bli oppdatert med eller uten vilje. 

Vi benytter localStorage når det kommer til lagring og innlastning av en bestemt kombinasjon av valg. Dette gjøres ved å trykke på “save-knappen” øverst på siden. Dette sørger for at brukerens favorittkombinasjon lagres mellom øktene. Kombinasjonen brukeren har valgt å lagre kan så hentes tilbake igjen uansett hvilken siden brukeren måtte befinne seg på ved å trykke på “load-knappen” øverst.

# RESPONSIVE WEB DESIGN

Bilde og innhold er festet til gridlines og blir skalert ned når man justerer vinduet. Med tanke på ulike viewports har vi har 3 ulike enheter i tankene. En mobiltelefon, en tablet, og en PC. Det er disse størrelsene vi derfor har valgt å bruke som breakpoints for mediaquery.

For desktop har siden en grid der innholdet blir midtstilt og tar opp 50% av skjermen. På 768 px skjermbredde setter en mediaquery inn en justering for griden som gjør at tabsene vises 2x2 istedenfor 4x1. For mobil gjør en mediaquery på 480 px skjermbredde at innholdet (og griden) tar opp 100% av bredden. Om man legger mobilen sidelengs registrer en mediaquery landscape mode og fanene blir justert til 4x1. 

# NODEJS OG NPM
Siden baserer seg på NODEJS og NPM. Create-react-app er brukt for å sette opp grunnleggende i react. 

# TESTING
Jest er brukt for testing. Det er tre ulike tester i “App.test.js”. Test 1 sjekker om siden gjengir det den skal uten å krasje, test 2 sjekke om siden laster uten errors, og test 3 sjekker om siden gjengir det som er gitt i snapshotet som er laget. Snapshotet har følgende adresse: “src/_snapshots_/App.test.js.snap”. 

Brukergrensesnitt og responsivt design er testet på mobil(horisontalt og vertikalt), tablet, og stor skjerm. Siden skaleres dynamisk og har tre ulike views. 

# INSTALLERING 
Prosjektet er installert på en virtual machine med adressen: http://it2810-08.idi.ntnu.no/prosjekt2/build/

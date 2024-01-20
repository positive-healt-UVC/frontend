#AbilityLink

De frontend van AbilityLink wordt gemaakt doormiddel van een Microservices Architectuur.
Hierbij wordt er gebruik gemaakt van een API Gateway als toegang tot de andere services.
Dit document beschrijft de design opbouw van de backend.

## Project

AbilityLink is een mobiele app die tot doel heeft de communicatie tussen zorgbegeleiders en mensen met beperkingen te vereenvoudigen en hen te ondersteunen om meer te bewegen.

De app is ontworpen met de volgende belangrijke doelstellingen in gedachten:

AbilityLink is specifiek ontworpen om toegankelijk te zijn voor mensen met diverse beperkingen. De app biedt aanpasbare functies en ondersteunt verschillende communicatiemodi om een inclusieve ervaring te waarborgen.

Zorgplanning en Activiteitenbeheer: De app bevat functies voor het plannen en beheren van activiteiten. Zorgbegeleiders kunnen activiteiten toewijzen aan groepen, en zowel begeleiders als deelnemers kunnen deze activiteiten zien in hun agenda. Dit bevordert een georganiseerde en gestructureerde benadering van zorg en stimuleert de deelnemers om actiever deel te nemen aan de activiteiten.

Smartwatch Integratie met NFC: AbilityLink maakt gebruik van smartwatch, waardoor gebruikers kunnen inchecken bij activiteiten met behulp van NFC-technologie. Dit draagt bij aan een vloeiende en moeiteloze deelname aan geplande activiteiten.

## Developing

Once you've created a project you can install dependencies and start the application with
```bash
docker compose up

# or start the server via npm dev and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

# AbilityLink Frontend

De frontend van AbilityLink is een NodeJS applicatie met Svelte.
De Gateway service vanuit de backend wordt gebruikt om data te verkrijgen.
Dit document beschrijft de design opbouw van de backend,
en de installatie en uitvoer van het project.

## Project

AbilityLink heeft als doel de communicatie tussen organisaties en beperkten te verbeteren.
In een wereld waar beperkten mensen mee willen doen aan fysieke activiteiten,
is het soms moeilijk voor begeleiders om op de juiste manier om te gaan met de deelnemers.
Deze applicatie probeert om het gat tussen de partijen kleiner te maken,
waardoor iedereen meer genot en effect uit de activiteiten kan halen.
De app is ontworpen met de volgende belangrijke doelstellingen in gedachten:

- AbilityLink is specifiek ontworpen om toegankelijk te zijn voor mensen met diverse beperkingen. 
De app biedt aanpasbare functies en ondersteunt verschillende communicatiemodi om een inclusieve ervaring te waarborgen.
- Zorgplanning en Activiteitenbeheer. De app bevat functies voor het plannen en beheren van activiteiten. 
Zorgbegeleiders kunnen activiteiten toewijzen aan groepen, 
en zowel begeleiders als deelnemers kunnen deze activiteiten zien in hun agenda. 
Dit bevordert een georganiseerde en gestructureerde benadering van zorg en stimuleert de deelnemers om actiever deel te nemen aan de activiteiten.
- Zorgplanning en Activiteitenbeheer. De app bevat functies voor het plannen en beheren van activiteiten. 
Zorgbegeleiders kunnen activiteiten toewijzen aan groepen, en zowel begeleiders als deelnemers kunnen deze activiteiten zien in hun agenda. 
Dit bevordert een georganiseerde en gestructureerde benadering van zorg en stimuleert de deelnemers om actiever deel te nemen aan de activiteiten.

## Afhankelijkheden

De front-end maakt gebruik van de volgende afhankelijkheden.
Dit zijn de externe pakketten die gebruikt worden om de applicatie te laten werken.
Zowel de paketten als de gebruikte versies worden in dit hoofdstuk beschreven.

- Node 20.10.0
- **Development**: @sveltejs/adapter-auto (2.0.0), @sveltejs/kit (1.5.0),
autoprefixer (10.4.14), eslint (8.28.0), eslint-config-prettier (8.5.0),
eslint-plugin-svelte3 (4.0.0), postcss (8.4.21), prettier (2.8.0),
prettier-plugin-svelte (2.8.1), svelte (3.54.0), svelte-check (3.0.1),
tailwindcss (3.3.1), typescript (5.0.0), vite (4.2.0), vite-plugin-mkcert (1.17.1), vitest (0.25.3)

## Developing

De applicatie op dit moment kan worden gebruikt doormiddel van docker of NPM. 

```bash
# Docker
docker compose up

# NPM
npm run dev -- --open
```
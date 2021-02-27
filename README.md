# Covid19 Global Vaccinations & Adverse Reactions

![COVID-Vaccine](Images/Images3.jpg)

## Motivation:
The novel coronavirus disease (COVID-19)—which emerged in Wuhan, China, in November 2019—has grown into a global threat and was eventually declared a global pandemic. It has seriously impacted the lives of many and caused numerous deaths, caused by the novel SARS-CoV-2 virus. CVR team further examined the effects and benefits of COVID-19 Vaccines globally.  

### Project Description/Outline:
## Definitions

### Assignment of clinical phases
There are five phases of clinical trials: Phase I, Phase I/II, Phase II, Phase II/III, Phase III.

If a vaccine is in a dual phase like `Phase I/II` or in `Phase II/III` it is tested there simultaneously, but for analysis assigned to the higher phase: a vaccine candidate in `Phase I/II`is assigned to `Phase II`, whereas a vaccine candidate tested in `Phase II/III` it is assigned to `Phase III`.

Beyond these dual phases, vaccine candidates can be in different clinical trial phases at the same time (e.g. `Phase I` and `Phase III`) with different trial parameters (age, pre-existing conditions). If that is the case for a candidate, it is shown in both phases.

### Approval
Each country has their own national regulatory authorities (NRA) responsible for approving for new drugs in their country. There are several NRAs that are particularly relevant, among them the US-American [FDA](https://www.fda.gov/vaccines-blood-biologics/industry-biologics/coronavirus-covid-19-cber-regulated-biologics) and the European [EMA](https://www.ema.europa.eu/en/human-regulatory/overview/public-health-threats/coronavirus-disease-covid-19/treatments-vaccines-covid-19). We signify a COVID-19 vaccine as approved if one of these bodies approves a vaccine. 

We will also classify a vaccine as approved if one of these two bodies greenlights a new vaccine on their ["emergency use listing"](https://www.who.int/news-room/q-a-detail/coronavirus-disease-use-of-emergency-use-listing-procedure-forvaccines-against-covid-19), or if the [WHO](https://www.who.int/teams/regulation-prequalification/eul/covid-19) does so. 

### Globally Authorized Vaccines


|         Name              | Vaccine Type | Primary Developer | Country of Origin |
|------------------------------------|------------------------------------|------------------------------------|------------------------------------|
| Comirnaty (BNT162b2)| mRNA-based vaccine | Pfizer, BioNTech; Fosun Pharma | Multinational |
| Convidicea (Ad5-nCoV)| Recombinant vaccine (adenovirus type 5 vector) | CanSino Biologics | China |
| COVID-19 Vaccine AstraZeneca (AZD1222); also known as Covishield| Adenovirus vaccine | BARDA, OWS | UK |
| EpiVacCorona| Peptide vaccine | Federal Budgetary Research Institution State Research Center of Virology and Biotechnology| Russia |
| JNJ-78436735 (formerly Ad26.COV2.S)| Non-replicating viral vector | Janssen Vaccines (Johnson & Johnson) | The Netherlands, US |
| Moderna COVID‑19 Vaccine (mRNA-1273)| mRNA-based vaccine | Moderna, BARDA, NIAID | US |
| Sputnik V | Recombinant adenovirus vaccine (rAd26 and rAd5) | Gamaleya Research Institute, Acellena Contract Drug Research and Development | Russia |

### Limitations + Strengths (VASERS - Vaccine Adverse Event Reporting System)


|         Strengths               | Limitations |
|------------------------------------|------------------------------------|
| National Data | Reporting bias |
| Data available to public | Inconsistent data quality and completeness	|
| Collects information about vaccine, characteristics of patient vaccinated, adverse event | No unvaccindated comparison group |
| VAERS is a tool for identifying potential vaccine safety concerns that need further study using more robust data systems | Cannot calculate how often adverse events occur |
| Rapid signal detection for rease adverse events | Generally cannnot assess if vaccine caused an adverse event	|

### COVID19 by Our World in Data
https://github.com/owid/covid-19-data/tree/master/public/data

![COVID-Vaccine](Images/DailyNewC19v.jpg)

![COVID-Vaccine](Images/DailyNewC19w.jpg)

### Research Questions to Answer:
Track COVID-19 vaccination in the World, answer questions:
* Which country is using what vaccine?
* In which country the vaccination programme is more advanced?
* Where are vaccinated more people per day? 
  * But in terms of percent from entire population ?
* Number of unique manufacturers/Vaccines
* What vaccines are used and in which countries?
* What country is vaccinated more people?
* What country is vaccinated a larger percent from its population?
* Peope vaccinated and people fully vaccinated
* Total number of vaccines
* Percent of vaccination
* Daily vaccinations
* Daily vaccinations per million
* People vaccinated (vaccination scheme has 2 vaccines/person, 1st vaccination and 2nd vaccination, after 21 days);
* People vaccination percent
* Which country is using what vaccine or What vaccines are used and in which countries?
* What is the vaccine distribution? Are there any decreases in the number of cases in the countries that begin the vaccination process?
* In which country the vaccination programme is more advanced?
* Where are vaccinated more people per day? But in terms of a percent from the entire population?
* What country is vaccinated more people? What country is vaccinated a larger percentage of its population?
* After the beginning of the vaccine process all around the world, how the infection trend moves?
* Are there any correlations between the factors of development indicators and the numbers of vaccinations?

### Datasets used but not limited to:
1. Global real time data:	https://github.com/owid/covid-19-data/tree/master/public/data
2. Country Vaccinations (data download .csv file):	https://www.kaggle.com/gpreda/covid-world-vaccination-progress?select=country_vaccinations.csv
3. Global Data Vaccinations:	https://ourworldindata.org/covid-vaccinationsf
4. Vaccine Adverse Event Reporting System (data DL):	https://vaers.hhs.gov/eSubDownload/verification
5. Vaccine Adverse Event Reporting System (data DL):	VAERS - Data Sets (hhs.gov)
6. VAERS Data User Guide (Explains the data downloaded):	DEPARTMENT OF HEALTH AND HUMAN SERVICES (hhs.gov)
7. Vaccine Article:	https://www.nature.com/articles/s41597-020-00688-8
8. Global Vaccine data json file:	https://covid.ourworldindata.org/data/owid-covid-data.json
9. Global Vaccination Progress data .csv file:	COVID-19 World Vaccination Progress | Kaggle
10. WHO Data Sets	https://www.who.int/publications/m/item/draft-landscape-of-covid-19-candidate-vaccines
11. CDC Public Data Sets	https://data.cdc.gov/browse?tags=covid-19
12. Info on national CT's	https://www.clinicaltrials.gov/
13. US Covid Data API	https://covidtracking.com/data/api
14. Covid APIs	https://covid-19-apis.postman.com/
15. Covid Global API	https://www.programmableweb.com/api/covid-19-report-rest-api-v10
16. Covid Global API (Doc)	https://about-corona.net/documentation
17. Covid Global API based on Johns Hopkins CSSE	https://www.programmableweb.com/api/coronavirus-data-rest-api-v10
18. Covid Gobal API includes summaries, cases, cases per/day/region/country/deaths/recovered etc	https://www.programmableweb.com/api/mathdroid-covid-19-rest-api-v10
19. CDC US data	https://covid.cdc.gov/covid-data-tracker/#vaccinations

### Rough Breakdown of Tasks:
1. Pulling data and cleaning the data 
2. Taking the most current data needed for the project
3. Define at what level (ex: Countries, Continent, Manufactors, Patient received doses etc) we want to look 
4. Clean up code and upload to Github
5. Analyze, plot the data to answer our research questions as applicable
6. 
6. PowerPoint slide to present at the end of the project.

### Data Analytics Team:
* [Navi Sohi](https://github.com/PlainJane20): `Project Idea`, `Data collection`, `Readme`, `HTML5`/`CSS3`/`Bootstrap`
* [Leonard Zhao](https://github.com/leonardz17): `Leaflet` and `plotly`
* [Paola Lopez](https://github.com/paola1395): `Python` `Flask`
* [Yuying Hong](https://github.com/yuyhong23): `Data cleaning`, one extra `JS library`→ animation


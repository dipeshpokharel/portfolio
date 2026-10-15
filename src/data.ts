export const profile = {
  name: 'Dipesh Pokharel',
  email: 'deeface0@gmail.com',
  phone: '9843388075',
  linkedin: 'https://www.linkedin.com/in/dipesh-pokharel-4ba836b4/',
  location: 'Kathmandu, Nepal',
  headline: 'Disaster risk management · Geospatial intelligence · Civil engineering',
};
export type Project = { id: string; number: string; category: string; title: string; place: string; year: string; description: string; details: string[]; tags: string[]; visual: 'terrain'|'wave'|'grid'|'rain'|'school'|'city' };
export const projects: Project[] = [
  {id:'melamchi', number:'01', category:'EARLY WARNING SYSTEMS', title:'Multi-Hazard Early Warning in Melamchi', place:'Melamchi, Nepal', year:'2024—25', description:'Supporting community preparedness through multi-hazard early warning, risk communication, and decision-support tools.', details:['Worked on implementation of multi-hazard early warning in the Melamchi region at RIMES.','Contributed to development of INSTANT, a decision-support system for Melamchi Municipality.','Coordinated with the Department of Hydrology and Meteorology on forecast dissemination.','Supported hazard mapping, risk assessment, workshops, and community information dissemination.'], tags:['Early Warning','INSTANT','Hazard Mapping'], visual:'wave'},
  {id:'landslide', number:'02', category:'MACHINE LEARNING + GIS', title:'Mapping Landslide Susceptibility', place:'Bhotekoshi, Nepal', year:'2022', description:'Comparing five machine learning approaches to understand and map landslide susceptibility in mountainous terrain.', details:['Compared Random Forest, Support Vector Machine, Naïve Bayes, Logistic Regression, and Artificial Neural Network models.','Analyzed topographical and hydrological landslide causative factors using GIS software.','Prepared landslide risk maps for Bhotekoshi Rural Municipality.','The research was presented as an MSc thesis and a related paper was published in IOE_GC.'], tags:['Machine Learning','QGIS','Risk Maps'], visual:'terrain'},
  {id:'forec', number:'03', category:'DISASTER DATA + VISUALIZATION', title:'ForeC: Making Hazard Data Useful', place:'Nepal', year:'2023—24', description:'Bringing field data, interactive mapping, and cross-organizational collaboration into a shared disaster information workflow.', details:['Supervised collection and quality control of monsoon-hazard observations using Survey123.','Visualized datasets in ArcGIS Online and prepared story maps.','Developed conceptual tool functions using QGIS and Excel to guide developers.','Led a three-day ForeC Clinic workshop and supported local government and community introduction sessions.'], tags:['Survey123','ArcGIS Online','Data Management'], visual:'grid'},
  {id:'citizen-science', number:'04', category:'CLIMATE + COMMUNITY', title:'Citizen Science Rainfall Monitoring', place:'Ilam & Panchthar, Nepal', year:'2025—', description:'Supporting a citizen-science approach to rainfall monitoring alongside local disaster risk governance work.', details:['Program listed among responsibilities as Project Coordinator at the Stimson Center.','Working on local disaster risk governance assessment.','Supported the NDRRMA with scientific analysis and satellite imagery during the Rasuwa flood.'], tags:['Rainfall','Citizen Science','Governance'], visual:'rain'},
  {id:'schools', number:'05', category:'RESILIENT INFRASTRUCTURE', title:'Resilience of Schools', place:'Kathmandu, Nepal', year:'2022—23', description:'Translating safer building practices into practical school-level training.', details:['Conducted one-day retrofitting and building maintenance training for 34 schools in Kathmandu.','Served as DRR Expert for the Disaster Resilience of Schools Project under CLPIU, funded through an ADB loan.'], tags:['Retrofitting','Training','34 Schools'], visual:'school'},
  {id:'spatial', number:'06', category:'GEOSPATIAL RESEARCH', title:'Digitization & Spatial Analysis', place:'Kathmandu Valley', year:'2021', description:'Turning geological and land-use imagery into georeferenced, queryable spatial data.', details:['Georeferenced and digitized geological, building, and vegetation maps of Kathmandu Valley.','Performed proximity and nearest-location analyses on sample hotel, ski lift, restaurant, and vegetation datasets.'], tags:['Digitization','Spatial Analysis','GIS'], visual:'city'},
];
export const experience = [
  {title:'Project Coordinator', organization:'Stimson Center', date:'Apr 2025 — Present', note:'Citizen science rainfall monitoring, local disaster risk governance, and satellite analysis in support of flood response.'},
  {title:'Project Officer · SLMC', organization:'RIMES', date:'Apr 2024 — Apr 2025', note:'Multi-hazard early warning in Melamchi, INSTANT decision-support tool, and forecast communication.'},
  {title:'Data Management Officer · ForeC', organization:'CSRC, Nepal', date:'Sep 2023 — Jan 2024', note:'Field data quality, ArcGIS Online visualization, partner coordination, and tool development concepts.'},
  {title:'Research Assistant', organization:'Institute of Himalayan Risk Reduction', date:'Aug 2021 — Aug 2023', note:'GIS mapping, data collection, research, literature reviews, reporting, and documentation.'},
  {title:'DRR Expert', organization:'Disaster Resilience of Schools Project', date:'Nov 2022 — Jan 2023', note:'Delivered retrofitting and maintenance training across 34 schools in Kathmandu.'},
  {title:'Civil Engineer', organization:'National Reconstruction Authority', date:'Sep 2019 — Jul 2021', note:'Reconstruction, public building procurement, cost estimation, site supervision, and coordination in Sindhupalchowk.'},
  {title:'Civil Engineer', organization:'Artista Engineering Consultancy', date:'Dec 2018 — Sep 2019', note:'Building drawings and estimates, road design, and technical audit of seven school buildings.'}
];
export const skillGroups = [
  {title:'Geospatial & mapping', items:['QGIS','ArcGIS','ArcGIS Online','Survey123','Spatial Analysis','Hazard Mapping']},
  {title:'Disaster intelligence', items:['Disaster Risk Assessment','Early Warning Systems','Risk Communication','Machine Learning','Field Data Collection','KOBO Tools']},
  {title:'Engineering & analysis', items:['AutoCAD','ETABS','Smart Road','SPSS','Microsoft Office','Report Writing']}
];
export const education = [
  {degree:'MSc · Disaster Risk Management', institution:'Pulchowk Campus, Institute of Engineering, Tribhuvan University', year:'2022', score:'83.03%'},
  {degree:'BE · Civil Engineering', institution:'Pulchowk Campus, Institute of Engineering, Tribhuvan University', year:'2018', score:'76.25%'},
  {degree:'+2', institution:'GoldenGate International College', year:'2014', score:'85.5%'}
];

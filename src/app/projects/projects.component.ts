import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  testimages = ['../../assets/images/Damien_experience.png', '../../assets/images/Damien_experience.png', '../../assets/images/tools4Gentry.png']

  projects = [
    {
      title: 'Damien Experience',
      images: [
        { url: '../../assets/images/Damien_experience/Damien_experience.png' },
        { url: '../../assets/images/Damien_experience/finished_login_pc.png' },
        { url: '../../assets/images/Damien_experience/finished_registration_select_1.png' },
        { url: '../../assets/images/Damien_experience/finished_track_user_web.png' },
    ],
      description: 'Damien Experience is een wandelevenement georganiseerd door de Damiaanactie. Hierbij heb ik meegewerkt aan de website waar men zich kan inschrijven en real-time wandelaars kan volgen. Samen met de android applicatie waarmee de wandelaar de route kan volgen en zijn afgelegde route ook steeds geupdate wordt.',
      tags: ['Angular', '.NET', 'MongoDB', 'Android', 'Kotlin']
    },
    {
      title: 'IT-Lab management tool',
      images: [
        { url: '../../assets/images/itLab/ItLab_home.png' },
        { url: '../../assets/images/itLab/ItLab_sessiekalender.png' },
        { url: '../../assets/images/itLab/ItLab_sessie.png' },
        { url: '../../assets/images/itLab/ItLab_java_home.png' },
        { url: '../../assets/images/itLab/ItLab_java_sessie.png' },
    ],
      description: 'Een Java applicatie voor het beheren en een website voor het bekijken van sessies georganiseerd door het HOGent IT-Lab.',
      tags: ['ASP.NET', 'Java', 'SQL Server']
    },
    {
      title: 'Tools4Gentry',
      images: [
        { url: '../../assets/images/tools4Gentry/tools4Gentry.png' },
        { url: '../../assets/images/tools4Gentry/add_deck.png' },
        { url: '../../assets/images/tools4Gentry/add_deck2.png' },
    ],
      description: 'Tools4Gentry is een Magic, the Gathering deckbuilder. Deze deckbuilder is specifiek bedoeld voor het format "Gentry".',
      tags: ['Angular', '.NET', 'SQL Server']
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

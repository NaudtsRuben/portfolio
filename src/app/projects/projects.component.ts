import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

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
      description: 'damienExperienceDescription',
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
      description: 'itLabDescription',
      tags: ['ASP.NET', 'Java', 'JavaFX','SQL Server']
    },
    {
      title: 'Tools4Gentry',
      images: [
        { url: '../../assets/images/tools4Gentry/tools4Gentry.png' },
        { url: '../../assets/images/tools4Gentry/add_deck.png' },
        { url: '../../assets/images/tools4Gentry/add_deck2.png' },
    ],
      description: 'tools4GentryDescription',
      tags: ['Angular', '.NET', 'SQL Server']
    },
  ];

  constructor(public translate: TranslateService) { 
    console.log(this.translate.instant('tools4GentryDescription'))
  }

  ngOnInit(): void {
    
  }

}

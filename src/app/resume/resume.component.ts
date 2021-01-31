import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor(private breakpointObserver: BreakpointObserver, public translate: TranslateService) { }

  ngOnInit(): void {
  }

  get CV():string{
    if(this.translate.currentLang){
      return "../../assets/resumes/" + this.translate.currentLang + ".pdf";
    }
    
    return "../../assets/resumes/en.pdf";
  }
}

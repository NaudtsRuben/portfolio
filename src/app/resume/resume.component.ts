import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
  }

  get CV():string{
    if(this.translate.currentLang){
      return "../../assets/resumes/" + this.translate.currentLang + ".pdf";
    }
    
    return "../../assets/resumes/en.pdf";
  }

  openCV(){
    window.open(this.CV)
  }
}

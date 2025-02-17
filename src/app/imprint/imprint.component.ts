import { Component } from '@angular/core';
import { NavbarComponent } from "../shared/navbar/navbar.component";
import { SetLanguageService } from './../set-language.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
  globalLanguage: string = 'DE';
  staticTexts = {
    english: {
      headline:'Imprint',
      tmg:['Information pursuant to § 5 TMG (German Telemedia Act):','Jonas Gersting', 'Am Hafendeck 6-8', '63067 Offenbach', 'Germany'],
      contactHead: 'Contact:',
      disclaimer: ['Disclaimer:', 'The content of this website has been created with the greatest possible care. However, I cannot guarantee that the content is accurate, complete or up-to-date. As a service provider, I am responsible for my own content on these pages in accordance with general laws pursuant to Section 7 (1) of the German Telemedia Act (TMG). However, according to Sections 8 to 10 of the TMG, service providers are not obligated to permanently monitor submitted or stored information or to search for evidence that indicates illegal activity. Legal obligations to remove information or to block the use of information remain unaffected. In this case, liability is only possible from the moment of knowledge of a specific infringement. Upon notification of appropriate violations, I will remove this content immediately.'],
      liabilityForLinks: ['Liability for Links:', 'My website contains links to external websites of third parties over whose content I have no influence. Therefore, I cannot assume any liability for these external contents. The respective provider or operator of the pages is always responsible for the content of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal content was not recognizable at the time of linking. However, a permanent control of the content of the linked pages is not reasonable without concrete evidence of an infringement. Upon notification of violations, I will remove such links immediately.' ],
      copyright: ['Copyright:', 'The content and works on these pages created by the website operator are subject to German copyright law. The reproduction, processing, distribution and any kind of exploitation outside the limits of copyright law require the written consent of the respective author or creator. Downloads and copies of this site are only permitted for private, non-commercial use. As far as the content on this site was not created by the operator, the copyrights of third parties are respected. In particular, contents of third parties are marked as such. Should you still become aware of a copyright infringement, I request that you notify me accordingly. Upon notification of violations, I will remove such content immediately.' ],
      liability: ['Liability:','We shall not be liable for any loss or damage arising from or in connection with the use of this website, including but not limited to, direct, indirect, incidental, consequential, or punitive damages.'],
      governingLaw: ['Governing Law:', 'This legal notice and your use of this website shall be governed by and construed in accordance with the laws of Germany, and any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts of Germany.'],
      ChangesLegalNotice: ['Changes to this Legal Notcie:', 'We reserve the right to modify this legal notice at any time. The current version will always be accessible on this page.' ],
      privacy: ['Privacy:','We take the protection of your personal data very seriously. For detailed information about the nature, scope, and purpose of the collection and use of your data, as well as your rights and privacy protection options, please refer to our detailed'],
      privacyPol: 'Privacy Policy'
    },
    german:{
      headline:'Impressum',
      tmg:['Angaben gemäß § 5 TMG:','Jonas Gersting', 'Am Hafendeck 6-8', '63067 Offenbach', 'Germany'],
      contactHead: 'Kontakt:',
      disclaimer: ['Haftungsausschluss:', 'Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Ich übernehme jedoch keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Inhalte. Als Diensteanbieter bin ich gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin ich als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werde ich diese Inhalte umgehend entfernen.'],
      liabilityForLinks: ['Haftung für Links:', 'Meine Website enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Links umgehend entfernen.' ],
      copyright: ['Urheberrecht::', 'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitte ich um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Inhalte umgehend entfernen.' ],
      liability: ['Haftung:','Wir haften nicht für Verluste oder Schäden, die sich aus oder im Zusammenhang mit der Nutzung dieser Website ergeben, einschließlich, aber nicht beschränkt auf direkte, indirekte, zufällige, Folgeschäden oder Strafschadenersatz.'],
      governingLaw: ['Geltendes Recht:', 'Dieser rechtliche Hinweis und Ihre Nutzung dieser Website unterliegen den Gesetzen Deutschlands und werden in Übereinstimmung mit diesen ausgelegt. Alle Streitigkeiten im Zusammenhang mit diesen Geschäftsbedingungen unterliegen der ausschließlichen Zuständigkeit der Gerichte Deutschlands.'],
      ChangesLegalNotice: ['Änderungen dieses rechtlichen Hinweises:', 'Wir behalten uns das Recht vor, diesen rechtlichen Hinweis jederzeit zu ändern. Die aktuelle Version ist immer auf dieser Seite abrufbar.' ],
      privacy: ['Datenschutz:','Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Ausführliche Informationen über Art, Umfang und Zweck der Erhebung und Verwendung Ihrer Daten sowie über Ihre Rechte und Einstellungsmöglichkeiten zum Datenschutz entnehmen Sie bitte unserer ausführlichen'],
      privacyPol: 'Datenschutzerklärung'
    }
  }
  constructor(private languageService: SetLanguageService, private router: Router) {
    this.languageService.language$.subscribe(lang => {
      this.globalLanguage = lang;
    });
  }

  showPrivacyPolicy(){
    this.router.navigateByUrl('privacyPolicy');
  }
}

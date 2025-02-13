import { Component } from '@angular/core';
import { SetLanguageService } from './../set-language.service';
import { NavbarComponent } from "../shared/navbar/navbar.component";

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {
  globalLanguage: string = 'DE';
  staticTexts = {
    english:{
      privacyHeadline: 'Privacy Policy',
      peronalData: [
        '1. Information on the Collection of Personal Data',
        '(a) In the following, we inform you about the collection of personal data when using our website. Personal data are all data that can be personally related to you, e.g. name, address, email addresses, user behaviour.',
        '(b) Controller pursuant to Art. 4 para. 7 of the EU General Data Protection Regulation (GDPR) is Jonas Gersting, Am Hafendeck 6-8, 63067 Offenbach, Deutschland.'
      ],
      yourRights: [
        '2. Your Rights',
        'You have the following rights with respect to the personal data concerning you:',
        'Right to access,',
        'Right to rectification or erasure,',
        'Right to restriction of processing,',
        'Right to object to processing,',
        'Right to data portability.',
        'You also have the right to lodge a complaint with a supervisory authority concerning the processing of your personal data.'
      ],
      visitingWebsite: [
        '3. Collection of Personal Data When Visiting Our Website',
        'If you wish to view our website, we collect the following data, which are technically necessary for us to display our website to you and to ensure stability and security (legal basis is Art. 6 para. 1 sentence 1 lit. f GDPR):',
        'IP address',
        'Date and time of the request',
        'Time zone difference to Greenwich Mean Time (GMT)',
        'Content of the request (specific page)',
        'Access status/HTTP status code',
        'Data volume transmitted in each case',
        'Website from which the request comes',
        'Browser',
        'Operating system and its interface',
        'Language and version of the browser software'
      ],
      contactForm: [
        '4. Contact Form / Email Contact',
        'When you contact us by email or via a contact form, the data you provide (your email address, possibly your name and telephone number) will be stored by us in order to answer your questions. We delete the data arising in this context after storage is no longer necessary, or limit the processing if there are statutory retention obligations.'
      ],
      hosting: [
        '5. Hosting',
        'We host the contents of our website with the following provider: All-Inkl',
        `The provider is ALL-INKL.COM - Neue Medien Münnich, Owner René Münnich, Hauptstraße 68, 02742 Friedersdorf (hereinafter All-Inkl). For details, please see All-Inkl's privacy policy:`,
        `The use of All-Inkl is based on Art. 6(1)(f) GDPR. We have a legitimate interest in having our website displayed as reliably as possible. If corresponding consent has been requested, the processing is carried out exclusively on the basis of Art. 6(1)(a) GDPR and § 25(1) TDDDG, insofar as the consent includes the storage of cookies or access to information in the user's end device (e.g., device fingerprinting) within the meaning of the TDDDG. The consent can be revoked at any time.`,
        'Order Processing Agreement',
        'We have concluded an order processing agreement for the use of the above-mentioned service. This is a contract required by data protection law, which ensures that they process the personal data of our website visitors only according to our instructions and in compliance with the GDPR.',
      ],
      plugins: [
        '6. Plugins and Tools',
        'Google Fonts (Local Hosting)',
        'This site uses so-called Google Fonts provided by Google for the uniform display of fonts. The Google Fonts are locally installed. A connection to Google servers does not take place.',
        'For more information about Google Fonts, please visit',
        `and refer to Google's privacy policy:`,
      ],
      changes: [
        '7. Changes to this Privacy Policy',
        'We reserve the right to amend this privacy policy at any time. The current version is available on our website.'
      ]
    },
    german: {
      privacyHeadline: 'Datenschutzerklärung',
      peronalData: [
        '1. Informationen zur Erhebung personenbezogener Daten',
        '(a) Im Folgenden informieren wir Sie über die Erhebung personenbezogener Daten bei Nutzung unserer Website. Personenbezogene Daten sind alle Daten, die auf Sie persönlich beziehbar sind, z. B. Name, Adresse, E-Mail-Adressen, Nutzerverhalten.',
        '(b) Verantwortlicher gemäß Art. 4 Abs. 7 der EU-Datenschutz-Grundverordnung (DSGVO) ist Ismail Mohamed Masmoudi, Moosburgerstr 10, 80993 München, Deutschland.'
      ],
      yourRights: [
        '2. Ihre Rechte',
        'Sie haben folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:',
        'Recht auf Auskunft,',
        'Recht auf Berichtigung oder Löschung,',
        'Recht auf Einschränkung der Verarbeitung,',
        'Recht auf Widerspruch gegen die Verarbeitung,',
        'Recht auf Datenübertragbarkeit.',
        'Sie haben zudem das Recht, sich bei einer Datenschutzaufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten zu beschweren.'
      ],
      visitingWebsite: [
        '3. Erhebung personenbezogener Daten bei Besuch unserer Website',
        'Wenn Sie unsere Website betrachten möchten, erheben wir die folgenden Daten, die für uns technisch erforderlich sind, um Ihnen unsere Website anzuzeigen und die Stabilität und Sicherheit zu gewährleisten (Rechtsgrundlage ist Art. 6 Abs. 1 S. 1 lit. f DS-GVO):',
        'IP-Adresse',
        'Datum und Uhrzeit der Anfrage',
        'Zeitzonendifferenz zur Greenwich Mean Time (GMT)',
        'Inhalt der Anforderung (konkrete Seite)',
        'Zugriffsstatus/HTTP-Statuscode',
        'Jeweils übertragene Datenmenge',
        'Website, von der die Anforderung kommt',
        'Browser',
        'Betriebssystem und dessen Oberfläche',
        'Sprache und Version der Browsersoftware'
      ],
      contactForm: [
        '4. Kontaktformular / E-Mail-Kontakt',
        'Wenn Sie uns per E-Mail oder über ein Kontaktformular kontaktieren, werden die von Ihnen mitgeteilten Daten (Ihre E-Mail-Adresse, ggf. Ihr Name und Ihre Telefonnummer) von uns gespeichert, um Ihre Fragen zu beantworten. Die in diesem Zusammenhang anfallenden Daten löschen wir, nachdem die Speicherung nicht mehr erforderlich ist, oder schränken die Verarbeitung ein, falls gesetzliche Aufbewahrungspflichten bestehen.'
      ],
      hosting: [
        '5. Hosting',
        'Wir hosten die Inhalte unserer Website bei folgendem Anbieter: All-Inkl',
        `Der Anbieter ist ALL-INKL.COM - Neue Medien Münnich, Inhaber René Münnich, Hauptstraße 68, 02742 Friedersdorf (nachfolgend All-Inkl). Einzelheiten entnehmen Sie bitte der Datenschutzerklärung von All-Inkl:`,
        `Die Nutzung von All-Inkl erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse daran, unsere Website möglichst zuverlässig darstellen zu lassen. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO sowie § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.`,
        'Auftragsverarbeitungsvertrag',
        'Wir haben einen Auftragsverarbeitungsvertrag für die Nutzung des oben genannten Dienstes abgeschlossen. Dies ist ein datenschutzrechtlich vorgeschriebener Vertrag, der sicherstellt, dass sie die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und in Übereinstimmung mit der DSGVO verarbeiten.',
      ],
      plugins: [
        '6. Plugins und Tools',
        'Google Fonts (lokales Hosting)',
        'Diese Seite verwendet sogenannte Web Fonts, die von Google bereitgestellt werden, zur einheitlichen Darstellung von Schriftarten. Die Google Fonts sind lokal installiert. Eine Verbindung zu Servern von Google findet nicht statt.',
        'Weitere Informationen zu Google Web Fonts finden Sie unter',
        `und in der Datenschutzerklärung von Google:`,
      ],
      changes: [
        '7. Änderungen dieser Datenschutzerklärung',
        'Wir behalten uns das Recht vor, diese Datenschutzerklärung jederzeit zu ändern. Die aktuelle Version ist auf unserer Website verfügbar.'
      ]
    }
  }

  constructor(private languageService: SetLanguageService) {
    this.languageService.language$.subscribe(lang => {
      this.globalLanguage = lang;
    });
  }
}

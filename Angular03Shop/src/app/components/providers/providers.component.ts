import {Component, OnInit, Provider} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-providers',
  standalone: true,
  imports: [],
  templateUrl: './providers.component.html',
  styleUrl: './providers.component.css'
})
export class ProvidersComponent implements OnInit {
  ngOnInit(): void {
      throw new Error('Method not implemented.');
  }

  providers: any[] = [];
  provider: any | undefined;

 /* constructor(
    private route: ActivatedRoute,
    private providerService: ProviderService
   ) { }*/

  /*ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const providerName = routeParams.get('providerName');

    this.providerService.getProviders().subscribe((data: { providers: any[]; }) => {
      this.providers = data.providers;
      this.provider = this.providers.find((p: any) => p.name === providerName);
    });
  }*/
}

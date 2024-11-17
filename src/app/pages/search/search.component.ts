import { Component } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ArticleCardComponent } from './article-card/article-card.component';
import { Article } from '../../model/article.model';
import { ArticleService } from '../../services/article-service.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ArticleCardComponent, ReactiveFormsModule, MatButtonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  searchFormControl = new FormControl('', []);

  articles: Article[] | undefined
  loading: boolean = false;
  noContent: boolean = true;

  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    const article = {
      id: 1,
      title: 'Fluctuation of insect vectors of Cowpea aphid-borne mosaic virus in yellow passion fruit orchards in the state of Paraná, Brazil aphidborne aphid borne Paraná',
      language: 'INGLÊS',
      year: '2025',
      abstractArticle: 'This study identified and monitored the population fluctuations of insect vectors of Cowpea aphid-borne mosaic virus (CABMV) in experimental orchards in the North and Northwest Regions of the State of Paraná. The experiments were conducted in the cities of Londrina and Paranavaí at the Experimental Research Stations of the Instituto de Desenvolvimento Rural do Paraná-IAPAR-EMATER (IDR-Paraná), Brazil. The study period was from September 2019 to March 2021. In the experiments conducted in Londrina and in Paranavaí, yellow passion fruit plants were grown in trellis systems. Moericke traps were used to capture insects, and collections were performed weekly. Aphids were identified using a taxonomic identification key. The numbers of aphids present in each region were compared, and the populations were correlated with the climate and local precipitation. A total of 1522 and 1340 winged aphids were observed in the experiments in Londrina and Paranavaí, respectively. In Londrina, moderate positive correlations were observed between the number of insects and the maximum and average temperatures, while negative correlations were observed between the number of insects and the minimum temperature and precipitation. In contrast, in Paranavaí, the correlation between aphids and abiotic factors was negative, where maximum temperature was strongly correlated. In both regions, the following seven species of aphid vectors of CABMV were detected: Aphis fabae, Aphis gossypii, Toxoptera citricida, Acyrthosiphon pisum, Brevicoryne brassicae, Macrosiphum euphorbiae and Uroleucon ambrosiae. The population fluctuations of these species were influenced by variations in temperature and precipitation',
      source: {
        id: 1,
        name: 'CIÊNCIA RURAL'
      },
      keywords: [
        {
          id: 1,
          name: 'Passiflora edulis'
        },
        {
          id: 2,
          name: ' fruit hardening virus'
        },
        {
          id: 3,
          name: ' afídeos vetores'
        },
        {
          id: 4,
          name: ' vírus do endurecimento dos frutos'
        },
        {
          id: 5,
          name: ' vector aphids'
        }
      ],
      authors: [
        {
          id: 1,
          name: '	Karina Silva dos Santos',
          institution: {
            id: 1,
            name: 'Universidade Do Paraguai',
            country: 'Brasil'
          }
        },
        {
          id: 2,
          name: '	João Valdecir Casaroto Filho',
          institution: {
            id: 2,
            name: 'Universidade Do Paraguai',
            country: 'Paraguai'
          }
        },
        {
          id: 3,
          name: 'Roger Yochiharu Kotsubo',
          institution: {
            id: 1,
            name: 'Universidade do Brasil',
            country: 'Brasil'
          }
        },
      ]
    }
    this.articles = [];
    this.noContent = false;
  }

  focusOnInput() {
    this.noContent = false;
  }

  doSearch() {
    this.loading = true;
    this.articles = [];
    
    this.articleService.findBy(this.searchFormControl.value || '').subscribe(
      {
        next: (response) => {
          this.articles = response;
          this.loading = false;

          if (response.length == 0) {
            this.noContent = true;
          }
        },
        error: (e) => {
          this.articles = []
          this.loading = false;
          this.noContent = true;
        },
        complete: () => {
          this.loading = false;
        }
      }
    );
  }
}

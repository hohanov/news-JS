import './news.css';
import { Article } from '../../../types';
import { getElement } from '../../../utils/dom';

class News {
    public draw(data: Readonly<Article>[]): void {
        const news: Readonly<Article>[] = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment: DocumentFragment = document.createDocumentFragment();
        const newsItemTemp: HTMLTemplateElement = getElement<HTMLTemplateElement>(document, '#newsItemTemp');

        news.forEach((item: Readonly<Article>, idx: number) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as DocumentFragment;

            if (idx % 2) getElement(newsClone, '.news__item').classList.add('alt');

            getElement(newsClone, '.news__meta-photo').style.backgroundImage = `url(${
                item.urlToImage || 'img/news_placeholder.jpg'
            })`;
            getElement(newsClone, '.news__meta-author').textContent = item.author || item.source.name;
            getElement(newsClone, '.news__meta-date').textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

            getElement(newsClone, '.news__description-title').textContent = item.title;
            getElement(newsClone, '.news__description-source').textContent = item.source.name;
            getElement(newsClone, '.news__description-content').textContent = item.description;
            getElement(newsClone, '.news__read-more a').setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        const newsContainer: HTMLElement = getElement(document, '.news');
        newsContainer.innerHTML = '';
        newsContainer.appendChild(fragment);
    }
}

export default News;

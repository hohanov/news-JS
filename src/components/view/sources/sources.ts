import './sources.css';
import { Source } from '../../../types';
import { getElement } from '../../../utils/dom';

class Sources {
    public draw(data: Pick<Source, 'id' | 'name'>[]): void {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement = getElement<HTMLTemplateElement>(document, '#sourceItemTemp');

        data.forEach((item: Pick<Source, 'id' | 'name'>) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;

            getElement(sourceClone, '.source__item-name').textContent = item.name;
            getElement(sourceClone, '.source__item').setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        getElement(document, '.sources').append(fragment);
    }
}

export default Sources;

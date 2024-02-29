import { createElement } from "./tools/JsxFactory";

export class CategoryList{
    props : {
        categories: string[],
        selectedCategory: string,
        callback: (selected: string) => void
    }

    getContent(): HTMLElement{
        return(
            <div>
                {["All", ...this.props.categories].map(c => this.getCategoryButton(c))}
            </div>
        )
    }

    getCategoryButton(cat?: string): HTMLElement {
        let selected = this.props.selectedCategory === undefined ? "All": this.props.selectedCategory;
        let btnClass = selected === cat? "btn-primary": "btn-secondary";
        return (
            <div className="pt-2">
                <button className={ `btn col-12 ${btnClass} `} onclick={() => this.props.callback(cat)}>
                {cat}
            </button>

            </div>
            
        )
    }
}
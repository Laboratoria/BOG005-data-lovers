import CreateContainersForCharactersSection from "./displayList.mjs"


class CreateDisplayCard extends CreateContainersForCharactersSection {
    // eslint-disable-next-line constructor-super
    constructor(){
        super();
        this.buttonClose 
       this.newNodeFigCaptionCard 
        this.nodeH3
        this.spanNodeBirth 
        this.spanNodeHouse 
        this.spanNodeSpecies
        this.spanNodeGender 
        this.spanNodeBooks 
        this.spanNodePatronus 
        
    }

    createCharacterContainer(data, srcImage, section,event){
        
        data.forEach(elem => {
            if(event.target.dataset.img === elem.name || event.target.dataset.figcaption === elem.name){
            super.createCharacterContainer(data, srcImage, section)
            //if(event.target.textContent === ){}
// console.log('entró en la condición', event.target.dataset.img)
            this.buttonClose = document.createElement('button')
            //this.newNodeFigCaptionCard = document.createElement("figcaption");
            this.nodeH3 = document.createElement("h3");
            this.spanNodeBirth = document.createElement('span')   
            this.spanNodeHouse = document.createElement('span')
            this.spanNodeSpecies = document.createElement('span')
            this.spanNodeGender = document.createElement('span')
            this.spanNodeBooks = document.createElement('span')
            this.spanNodePatronus = document.createElement('span') 
            
            this.newNodeFigCaption.textContent = ''
            this.buttonClose.textContent = "X"

            this.nodeH3.textContent = elem.name
           
            this.spanNodeBirth.textContent = elem.birth
            
            this.spanNodeHouse.textContent = elem.house //CONDICIONAR PARA QUE SÖLO SALGA GRIFINDOR Y ETC

            this.spanNodeSpecies.textContent = elem.species
            //this.spanNodeGender = document.createElement('span')
            this.spanNodeGender.textContent = elem.gender
            //this.spanNodePatronus = document.createElement('span')
            this.spanNodePatronus.textContent = elem.patronus
            //this.spanNodeBooks = document.createElement('span')
            this.spanNodeBooks.textContent = '...' //traer libro por I

            // this.newNodeFigure.insertAdjacentElement('beforeend',this.buttonClose)
            // this.newNodeFigure.insertAdjacentElement('beforeend',this.newNodeFigCaption) //revisar si se cambia por el h3 o se deja el que viene de la data
            //this.newNodeFigure.insertAdjacentElement('afterend', this.nodeH3)
            // this.newNodeFigCaption.insertAdjacentElement('afterend', this.spanNodeBirth)
            // this.newNodeFigCaption.insertAdjacentElement('afterend', this.spanNodeHouse)
            // this.newNodeFigCaption.insertAdjacentElement('afterend', this.spanNodeSpecies)
            // this.newNodeFigCaption.insertAdjacentElement('afterend', this.spanNodeGender)
            // this.newNodeFigCaption.insertAdjacentElement('afterend', this.spanNodePatronus)
            // this.newNodeFigCaption.insertAdjacentElement('afterend', this.spanNodeBooks)
           
            this.newNodeFigure.append(this.nodeH3)
            //this.newNodeFigure.append(this.newNodeFigCaption)

            }
        })  
        }
            
        //});

        
        //this.newNodeFigure.append(this.newNodeFigCaptionCard)
       
        
    

    showCharacterCard (){
        this.containerCharacters.style.display= 'block'
    }

    hideCharacterCard (){
        this.containerCharacters.style.display= 'none'
    }
}

export default CreateDisplayCard;
export default class Product{
    id: number;
    name: string;
    city: string;
    description: string;
    contactPhone: string;
    price: number;
    publishDate:Date;
    
    image: string;

    constructor(id: number, name: string, city: string, description:string, contactPhone: string, price: number,publishDate:Date= new Date(), image: string)
    {
        this.id = id;
        this.name = name;
        this.city = city;
        this.contactPhone = contactPhone;
        this.price = price;
        this.description = description;
        this.publishDate = publishDate;
        this.image = image;
    }
    
}
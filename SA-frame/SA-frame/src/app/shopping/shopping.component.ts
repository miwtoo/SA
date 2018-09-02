import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  items = [
    {img:'https://s7d1.scene7.com/is/image/PETCO/puppy-090517-dog-featured-355w-200h-d',name:"Dog A",price:235.2}
    {img:'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13001000/Beagle-On-White-01-400x267.jpg',name:"Dog B",price:542.1}
    {img:'https://s7d1.scene7.com/is/image/PETCO/puppy-090517-dog-featured-355w-200h-d',name:"Dog C",price:999.4}
    {img:'https://pbs.twimg.com/profile_images/846146544072101888/0sLpdiu1_400x400.jpg',name:"Dog D",price:5542.4}
    {img:'https://media3.giphy.com/media/mokQK7oyiR8Sk/giphy.gif',name:"Dog E",price:5462}
    {img:'https://images.theconversation.com/files/205966/original/file-20180212-58348-7huv6f.jpeg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip',name:"Dog F",price:552}
    {img:'https://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/d/domestic-dog_thumb.ngsversion.1484159404151.adapt.1900.1.jpg',name:"Dog G",price:552}
    {img:'https://i.kinja-img.com/gawker-media/image/upload/s--WFkXeene--/c_scale,f_auto,fl_progressive,q_80,w_800/ol9ceoqxidudap8owlwn.jpg',name:"Dog H",price:277}
    {img:'https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/6/2016/02/golden-labrador-puppy-.jpg',name:"Dog I",price:542.4}
    {img:'https://s7d2.scene7.com/is/image/PetSmart/SV0401_CATEGORY_HERO-Dog-Dog-20160818?$SV0401$',name:"Dog J",price:2775.5}
    {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT24Cb5-cQZNdQBid1Rw7pvR_Jvq21w2LePDt5mwKB0CKb4uhIwnQ',name:"Dog K",price:452.5}
    {img:'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_1024,c_fill,g_auto,h_576,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F180316113418-travel-with-a-dog-3.jpg',name:"Dog L",price:552.4}
    {img:'https://i.imgflip.com/1sdoxn.jpg',name:"Dog M",price:772}
    {img:'https://i.imgur.com/9Th5a6E.png',name:"Dog N",price:288}
    {img:'https://thechive.files.wordpress.com/2018/03/service-dog-memes-always-bring-out-the-smiles-14.jpg?quality=85&strip=info&w=600',name:"Dog O",price:872}
    {img:'https://i.ytimg.com/vi/eUxQnXunpmA/maxresdefault.jpg',name:"Dog P",price:782.5}
  ];
  collection = [];
  constructor() {
    for (let i = 1; i <= 100; i++) {
      this.collection.push(`item ${i}`);
    }
   }

  ngOnInit() {
  }

}

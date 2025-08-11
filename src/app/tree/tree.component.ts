import { ArrayDataSource } from '@angular/cdk/collections';
import { CdkTree, CdkTreeModule } from '@angular/cdk/tree';
import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgIf } from '@angular/common';

interface NestedFoodNode {
  name: string;
  children?: NestedFoodNode[];
}

const EXAMPLE_DATA: NestedFoodNode[] = [
  {
    name: 'Fruit',
    children: [{ name: 'Apple' }, { name: 'Banana' }, { name: 'Fruit loops' }],
  },
  {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [{ name: 'Broccoli' }, { name: 'Brussels sprouts' }],
      },
      {
        name: 'Orange',
        children: [{ name: 'Pumpkins' }, { name: 'Carrots' }],
      },
    ],
  },
];

@Component({
  selector: 'app-tree', // Changed the selector name
  templateUrl: 'tree.component.html',
  styleUrls: ['tree.component.css'],
  imports: [CdkTreeModule, MatButtonModule, MatIconModule, NgIf],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class TreeComponent { // Changed the class name
  @ViewChild(CdkTree) tree!: CdkTree<NestedFoodNode>;

  childrenAccessor = (node: NestedFoodNode) => node.children ?? [];

  dataSource = new ArrayDataSource(EXAMPLE_DATA);

  hasChild = (_: number, node: NestedFoodNode) => !!node.children && node.children.length > 0;
}

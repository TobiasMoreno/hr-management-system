import { TreeNode } from '@/app/shared/interface';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTreeModule } from '@angular/material/tree';


const TREE_DATA: TreeNode[] = [
  {
    name: 'Home',
    children: [
      { name: 'Employees', children: [] },
      { name: 'Attendances', children: [] },
      { name: 'Reports', children: [] },
      { name: 'Vacations', children: [] },
      { name: 'Feedbacks', children: [] },
    ],
  },
  {
    name: 'Settings',
    children: [
      { name: 'Profile', children: [] },
      { name: 'Change Password', children: [] },
    ],
  },
];
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, MatListModule, MatTreeModule, MatIcon],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export default class HomeComponent {
  dataSource = TREE_DATA;

  childrenAccessor = (node: TreeNode) => node.children ?? [];

  hasChild = (_: number, node: TreeNode) =>
    !!node.children && node.children.length > 0;
}

import * as React from 'react';
import { Pagination as RTPagination, PaginationItem, PaginationLink } from 'reactstrap';
import { ItemCount } from '@components/pagination/itemCount';
import { ITEMS_PER_PAGE } from '../../shared/util/pagination.constants';

export interface IJhiPaginationProps {
  visible: boolean;
  activePage: number;
  onSelect: (page: number) => void;
  maxButtons: number;
  totalItems: number;
  itemsPerPage: number;
}

export interface IJhiPaginationState {
  currentPage: number;
}

export class Pagination extends React.Component<IJhiPaginationProps, IJhiPaginationState> {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: this.props.activePage,
    };
  }

  updateActivePage = currentPage => () => {
    this.setState({ currentPage });
    this.props.onSelect(currentPage);
  }

  previousPage = () => {
    this.setState({ currentPage: this.state.currentPage - 1 });
    this.props.onSelect(this.state.currentPage - 1);
  }

  nextPage = () => {
    this.setState({ currentPage: this.state.currentPage + 1 });
    this.props.onSelect(this.state.currentPage + 1);
  }

  itemsToDisplay = (activePage) => {
    const items = [];
    let item: any = {};
    let previousItem: any = {};
    const maxPage = this.getMaxPage();
    const padSup = Math.floor((this.props.maxButtons - 1) / 2);
    const modulo = (this.props.maxButtons - 1) % 2;
    const padInf = padSup + modulo;
    for (let j = 0; j < maxPage; j++) {
      item = {};
      if (
        j === 0 ||
        j === maxPage - 1 ||
        j === activePage - 1 ||
        j === activePage - 2 ||
        (activePage === 1 && j === 1) ||
        (activePage - padInf < j && j < activePage + padSup)
      ) {
        item.display = 'display';
      } else if (previousItem.display === 'disabled') {
        item.display = 'hidden';
      } else {
        item.display = 'disabled';
      }
      items.push(item);
      previousItem = { ...item };
      if (item.display === 'hidden') {
        previousItem.display = 'disabled';
      }
    }
    return items;
  }

  displayPaginationItem = i => (
    <PaginationItem active={this.props.activePage === i + 1} key={i}>
      <PaginationLink onClick={this.updateActivePage(i + 1)}>
        {i + 1}
      </PaginationLink>
    </PaginationItem>
  )

  cleanActivePage = () => {
    const { totalItems, itemsPerPage, activePage } = this.props;
    const cleanActivePage = totalItems === 0 ? 1 : Math.min(activePage, Math.ceil(totalItems / itemsPerPage));

    if (cleanActivePage !== activePage) {
      this.updateActivePage(cleanActivePage)();
    }
  }

  getMaxPage = () => {
    const { itemsPerPage, totalItems } = this.props;
    const division = Math.floor(totalItems / itemsPerPage);
    const modulo = totalItems % itemsPerPage;
    return division + (modulo !== 0 ? 1 : 0);
  }

  render() {
    this.cleanActivePage();
    const { activePage, totalItems, visible } = this.props;
    const maxPage = this.getMaxPage();

    return visible ? (
      <div className="mt-2">
        <div className="mb-2 justify-content-center row">
          <ItemCount page={activePage} total={totalItems} itemsPerPage={ITEMS_PER_PAGE}/>
        </div>

        <div className="justify-content-center row">
          <RTPagination>
            <PaginationItem {...(activePage === 1 && { disabled: true })}>
              <PaginationLink onClick={this.updateActivePage(1)}>
                ««
              </PaginationLink>
            </PaginationItem>
            <PaginationItem {...(activePage === 1 && { disabled: true })}>
              <PaginationLink previous onClick={this.previousPage}/>
            </PaginationItem>
            {this.itemsToDisplay(activePage).map((paginationItem, i) =>
              paginationItem.display === 'display' ? (
                this.displayPaginationItem(i)
              ) : paginationItem.display === 'disabled' ? (
                <PaginationItem disabled key={i}>
                  <PaginationLink>...</PaginationLink>
                </PaginationItem>
              ) : null)}
            <PaginationItem {...(activePage === maxPage && { disabled: true })}>
              <PaginationLink next onClick={this.nextPage}/>
            </PaginationItem>
            <PaginationItem {...(activePage === maxPage && { disabled: true })}>
              <PaginationLink onClick={this.updateActivePage(maxPage)}>
                »»
              </PaginationLink>
            </PaginationItem>
          </RTPagination>
        </div>
      </div>
    ) : '';
  }
}

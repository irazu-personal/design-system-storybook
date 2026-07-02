import { Button } from '../Button/Button';
import { DropdownMenu } from '../DropdownMenu/DropdownMenu';
import { SparkIcon } from '../SparkIcon';
import { TooltipTrigger } from '../Tooltip/TooltipTrigger';
import './Pagination.css';

export type PaginationType = 'basic' | 'prev-and-next' | 'total-items';

export type PaginationPageItem = number | 'ellipsis';

export type PaginationProps = {
  type?: PaginationType;
  currentPage?: number;
  totalPages?: number;
  pages?: PaginationPageItem[];
  totalItems?: number;
  pageSize?: number;
  pageSizeLabel?: string;
  onPageChange?: (page: number) => void;
  onPrevious?: () => void;
  onNext?: () => void;
  className?: string;
};

export type PaginationViewMoreProps = {
  summary?: string;
  buttonLabel?: string;
  onViewMore?: () => void;
  onScrollUp?: () => void;
  className?: string;
};

function ChevronButton({
  direction,
  disabled,
  onClick,
}: {
  direction: 'left' | 'right';
  disabled?: boolean;
  onClick?: () => void;
}) {
  const ariaLabel = direction === 'left' ? 'Previous page' : 'Next page';
  return (
    <TooltipTrigger text={ariaLabel} disabled={disabled}>
      <button
        type="button"
        className="spark-pagination-icon-button"
        disabled={disabled}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        <SparkIcon slug={`chevron-${direction}`} size="small" />
      </button>
    </TooltipTrigger>
  );
}

function PageNumber({
  page,
  active,
  onClick,
}: {
  page: number;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      className={['spark-pagination-page', active ? 'spark-pagination-page-active' : '']
        .filter(Boolean)
        .join(' ')}
      aria-current={active ? 'page' : undefined}
      onClick={onClick}
    >
      {page}
    </button>
  );
}

function BasicPages({
  currentPage,
  pages,
  onPageChange,
}: {
  currentPage: number;
  pages: PaginationPageItem[];
  onPageChange?: (page: number) => void;
}) {
  return (
    <div className="spark-pagination-pages">
      {pages.map((item, index) =>
        item === 'ellipsis' ? (
          <span key={`ellipsis-${index}`} className="spark-pagination-ellipsis" aria-hidden="true">
            …
          </span>
        ) : (
          <PageNumber
            key={item}
            page={item}
            active={item === currentPage}
            onClick={() => onPageChange?.(item)}
          />
        ),
      )}
    </div>
  );
}

export function Pagination({
  type = 'basic',
  currentPage = 1,
  totalPages = 9,
  pages = [1, 2, 3, 4, 5],
  totalItems = 296,
  pageSize = 10,
  pageSizeLabel = '10 / Page',
  onPageChange,
  onPrevious,
  onNext,
  className = '',
}: PaginationProps) {
  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, totalItems);
  const isFirstPage = currentPage <= 1;
  const isLastPage = currentPage >= totalPages;

  const rootClasses = ['spark-pagination', `spark-pagination-${type}`, className].filter(Boolean).join(' ');

  if (type === 'prev-and-next') {
    return (
      <nav className={rootClasses} aria-label="Pagination">
        <Button
          type="button"
          size="tiny"
          variant="ghost"
          className="spark-pagination-nav-text"
          disabled={isFirstPage}
          onClick={onPrevious}
        >
          Previous
        </Button>
        <BasicPages currentPage={currentPage} pages={pages} onPageChange={onPageChange} />
        <Button
          type="button"
          size="tiny"
          variant="ghost"
          className="spark-pagination-nav-text"
          disabled={isLastPage}
          onClick={onNext}
        >
          Next
        </Button>
      </nav>
    );
  }

  if (type === 'total-items') {
    return (
      <nav className={rootClasses} aria-label="Pagination">
        <p className="spark-pagination-range">
          {startItem}-{endItem} of {totalItems} items
        </p>
        <div className="spark-pagination-pages">
          <ChevronButton direction="left" disabled={isFirstPage} onClick={onPrevious} />
          <BasicPages currentPage={currentPage} pages={pages} onPageChange={onPageChange} />
          <ChevronButton direction="right" disabled={isLastPage} onClick={onNext} />
        </div>
        <DropdownMenu
          size="small"
          showLabel={false}
          text={pageSizeLabel}
          panelLayout="overlay"
          className="spark-pagination-page-size-select"
        />
      </nav>
    );
  }

  return (
    <nav className={rootClasses} aria-label="Pagination">
      <ChevronButton direction="left" disabled={isFirstPage} onClick={onPrevious} />
      <BasicPages currentPage={currentPage} pages={pages} onPageChange={onPageChange} />
      <ChevronButton direction="right" disabled={isLastPage} onClick={onNext} />
    </nav>
  );
}

export function PaginationViewMore({
  summary = '2 Project out of 20',
  buttonLabel = 'View More',
  onViewMore,
  onScrollUp,
  className = '',
}: PaginationViewMoreProps) {
  return (
    <div className={['spark-pagination-view-more', className].filter(Boolean).join(' ')}>
      <p className="spark-pagination-view-more-summary">{summary}</p>
      <div className="spark-pagination-view-more-actions">
        <Button type="button" size="small" variant="tertiary" onClick={onViewMore}>
          {buttonLabel}
        </Button>
        <TooltipTrigger text="Scroll to top">
          <button
            type="button"
            className="spark-pagination-view-more-scroll"
            aria-label="Scroll to top"
            onClick={onScrollUp}
          >
            <SparkIcon slug="arrow-narrow-up" size="small" />
          </button>
        </TooltipTrigger>
      </div>
    </div>
  );
}

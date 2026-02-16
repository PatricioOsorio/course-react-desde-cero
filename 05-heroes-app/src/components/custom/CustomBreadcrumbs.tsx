import { Link, useMatches } from 'react-router';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '../ui/breadcrumb';
import { Fragment } from 'react';

interface ICrumbHandle {
  crumb: string;
}

export const CustomBreadcrumbs = () => {
  const matches = useMatches();

  // filter only the routes that have handle.crumb
  const crumbs = matches.filter(
    (match) => match.handle && typeof (match.handle as ICrumbHandle).crumb === 'string'
  );

  if (crumbs.length === 0) return null;

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {crumbs.map((match, index) => {
          const isLast = index === crumbs.length - 1;
          const { crumb } = match.handle as ICrumbHandle;

          return (
            <Fragment key={match.id}>
              {index > 0 && <BreadcrumbSeparator />}

              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>{crumb}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link to={match.pathname} viewTransition>{crumb}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

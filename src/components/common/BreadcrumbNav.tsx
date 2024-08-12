import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";

type Props = {
  address?: string;
  worker?: string;
  sessionId?: string;
};

export const BreadcrumbNav = ({ address, worker, sessionId }: Props) => {
  return (
    <Breadcrumb className="px-2">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Pool</BreadcrumbLink>
        </BreadcrumbItem>
        {address && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={`/${address}`}>{address}</BreadcrumbLink>
            </BreadcrumbItem>
          </>
        )}
        {worker && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>{worker}</BreadcrumbItem>
          </>
        )}
        {sessionId && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>{sessionId}</BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export type SharedType = 'PUBLIC' | 'PRIVATE';

export type Provider = 'GOOGLE';

export type Roles = 'ROLE_USER' | 'ROLE_ADMIN';

export type SortingType = 'LATEST' | 'POPULAR';

export interface ImageRequest {
  file: File;
}

export interface ImageResponse {
  id: number;
  nickname: string;
  email: string;
  provider: Provider;
  profileImage: string;
}

// nickname 변경 request, 내 정보 response

export interface SnsList {
  name: string;
  url: string;
}

export interface MemberTag {
  id: number;
  name: string;
}

export interface UserInfoRequest {
  nickname: string;
  snsRequests: SnsList[];
  tagIds: number[];
}
export interface UserInfoResponse {
  id: number;
  nickname: string;
  email: string;
  provider: string;
  profileImage: string;
  snsList: SnsList[];
  memberTags: MemberTag[];
}

// access 토큰 재발급, 로그아웃
export interface TokenRequest {
  refreshToken: string;
}

export interface TokenResponse {
  accessToken: string;
  refreshToken: string;
}

export interface QuestionCreateRequest {
  content: string;
  answer: string;
  answerShareType: SharedType;
  tagIds: number[];
  bundleId: number;
}

export interface Question {
  id: number;
  content: string;
  answer: string;
  answerShareType: SharedType;
  shareCount: number;
  originId: number;
  tags: Tag[];
  isHot: boolean;
  createdAt: string;
  updatedAt: string;
  writerId: number;
}

export interface Tag {
  id: number;
  name: string;
}

//params
export interface QuestionReportRequest {
  id: number;
  reason: string;
}

export interface QuestionReportResponse {
  id: number;
  reason: string;
  questionId: number;
}

export interface QuestionDeleteRequest {
  id: number;
}

export interface QuestionUpdateRequest {
  questionId: number;
  content: string;
  answer: string;
  answerShareType: SharedType;
  tagIds: number[];
}

export interface QuestionSearchRequest {
  keyword: string;
  page: number;
  size: number;
  sortingType: SortingType;
  tagIds: number[] | string;
}

export interface QuestionSearchResponse {
  questionResponses: Question[];
  pageResponse: PageResponse;
}

export interface PageResponse {
  currentPage: number;
  lastPage: number;
}

export interface ClaimsCreateRequest {
  content: string;
}

export interface ClaimsCreateResponse {
  id: number;
  content: string;
}

export interface BundlesCreateRequest {
  name: string;
  shareType: string;
  tagIds: number[];
}

export interface BundlesUpdateRequest extends BundlesCreateRequest {
  bundleId: number;
}

export interface AddQuestionsToBundlesRequest {
  bundleIds: number[];
  questionIds: number[];
}

export interface BundlesBasic {
  id: number;
  name: string;
  shareType: SharedType;
  scrapeCount: number;
  tags: Tag[];
  isHot: boolean;
  createdAt: string;
  updatedAt: string;
  writerId: number;
}
export interface Bundle {
  id: number;
  name: string;
  shareType: SharedType;
  scrapeCount: number;
  tags: Tag[];
  isHot: boolean;
  createdAt: string;
  updatedAt: string;
  questions: Question[];
  writer: UserInfoResponse;
}

export interface BundlesUpdateResponse extends BundlesBasic {}

export interface PageCondition {
  page: number;
  size: number;
}

export interface BundleSearchRequest {
  sortingType: SortingType;
  tagIds?: number[];
  keyword?: string;
  page: number;
  size: number;
}

export interface BundleSearchResponse {
  totalPages: number;
  currentPage: number;
  pageSize: number;
  content: BundlesBasic[];
}

export interface BundleDetailRequest {
  bundleId: number;
  showOnlyMyQuestions?: boolean;
}

export interface QuestionReorderRequest {
  bundleId: number;
  questionIds: number[];
}

export interface BundleReorderRequest {
  bundleIds: number[];
}

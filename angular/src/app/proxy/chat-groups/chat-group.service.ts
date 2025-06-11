import type {
  ChatGroupCreateDto,
  ChatGroupDto,
  ChatGroupExcelDownloadDto,
  ChatGroupUpdateDto,
  GetChatGroupsInput,
} from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { AppFileDescriptorDto, DownloadTokenResultDto, GetFileInput } from '../shared/models';

@Injectable({
  providedIn: 'root',
})
export class ChatGroupService {
  apiName = 'Default';

  create = (input: ChatGroupCreateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ChatGroupDto>(
      {
        method: 'POST',
        url: '/api/app/chat-groups',
        body: input,
      },
      { apiName: this.apiName, ...config },
    );

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>(
      {
        method: 'DELETE',
        url: `/api/app/chat-groups/${id}`,
      },
      { apiName: this.apiName, ...config },
    );

  deleteAll = (input: GetChatGroupsInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>(
      {
        method: 'DELETE',
        url: '/api/app/chat-groups/all',
        params: {
          filterText: input.filterText,
          sorting: input.sorting,
          skipCount: input.skipCount,
          maxResultCount: input.maxResultCount,
          name: input.name,
          description: input.description,
          isActive: input.isActive,
          providerName: input.providerName,
          providerKey: input.providerKey,
        },
      },
      { apiName: this.apiName, ...config },
    );

  deleteByIds = (chatGroupIds: string[], config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>(
      {
        method: 'DELETE',
        url: '/api/app/chat-groups',
        params: { chatGroupIds },
      },
      { apiName: this.apiName, ...config },
    );

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ChatGroupDto>(
      {
        method: 'GET',
        url: `/api/app/chat-groups/${id}`,
      },
      { apiName: this.apiName, ...config },
    );

  getDownloadToken = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, DownloadTokenResultDto>(
      {
        method: 'GET',
        url: '/api/app/chat-groups/download-token',
      },
      { apiName: this.apiName, ...config },
    );

  getFile = (input: GetFileInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, Blob>(
      {
        method: 'GET',
        responseType: 'blob',
        url: '/api/app/chat-groups/file',
        params: { downloadToken: input.downloadToken, fileId: input.fileId },
      },
      { apiName: this.apiName, ...config },
    );

  getList = (input: GetChatGroupsInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<ChatGroupDto>>(
      {
        method: 'GET',
        url: '/api/app/chat-groups',
        params: {
          filterText: input.filterText,
          sorting: input.sorting,
          skipCount: input.skipCount,
          maxResultCount: input.maxResultCount,
          name: input.name,
          description: input.description,
          isActive: input.isActive,
          providerName: input.providerName,
          providerKey: input.providerKey,
        },
      },
      { apiName: this.apiName, ...config },
    );

  getListAsExcelFile = (input: ChatGroupExcelDownloadDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, Blob>(
      {
        method: 'GET',
        responseType: 'blob',
        url: '/api/app/chat-groups/as-excel-file',
        params: {
          downloadToken: input.downloadToken,
          filterText: input.filterText,
          name: input.name,
          description: input.description,
          isActive: input.isActive,
          providerName: input.providerName,
          providerKey: input.providerKey,
        },
      },
      { apiName: this.apiName, ...config },
    );

  update = (id: string, input: ChatGroupUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ChatGroupDto>(
      {
        method: 'PUT',
        url: `/api/app/chat-groups/${id}`,
        body: input,
      },
      { apiName: this.apiName, ...config },
    );

  uploadFile = (input: FormData, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AppFileDescriptorDto>(
      {
        method: 'POST',
        url: '/api/app/chat-groups/upload-file',
        body: input,
      },
      { apiName: this.apiName, ...config },
    );

  constructor(private restService: RestService) {}
}

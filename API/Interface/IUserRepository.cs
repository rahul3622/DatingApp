using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Dtos;
using API.Entities;

namespace API.Interface
{
    public interface IUserRepository
    {
        void update(AppUser user);

        Task<bool> SaveAllAsync();

        Task<IEnumerable<AppUser>> GetUsersAsync();

        Task<AppUser> GetUserByIdAsync(int id);

        Task<AppUser> GetUserByUserNameAsync(string username);

        Task<IEnumerable<MemberDto>> GetMembersAsAsync();

        Task<MemberDto> GetMemberAsAsync(string username);

        
    }
}
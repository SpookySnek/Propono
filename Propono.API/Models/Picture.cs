using System.ComponentModel.DataAnnotations;

namespace Propono.API.Models
{
    public class Picture
    {
        [Key]
        public int Id {get; set;}
        public string Title {get; set;}
        public DateTime? UploadDate {get; set;}
        public string ImgUrl {get; set;}
       
        public string? Tag {get; set;}

    }
}
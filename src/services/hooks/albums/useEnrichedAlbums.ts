import { useMemo } from "react";
import { useAlbums } from "@/services/hooks/albums/useAlbums";
import { useContinents } from "@/services/hooks/continents/useContinents";
import { useSurfBreakMap } from "@/services/hooks/continents/useSurfBreakMap";

export const useEnrichedAlbums = () => {
  const { data: albumsData, isLoading: albumsLoading } = useAlbums();
  const { data: continents, isLoading: locationsLoading } = useContinents();

  const getContinentIdByCountryId = (countryId: string) => {
    for (const continent of continents || []) {
      if (continent.countries.some((country: any) => country.id === countryId)) {
        return continent.id;
      }
    }
    return null;
  };

  const albums = albumsData?.data?.items || [];
  const surfBreakMap = useSurfBreakMap(albums, getContinentIdByCountryId);

  const getCountryName = (countryId: string): string => {
    for (const continent of continents || []) {
      const country = continent.countries.find((c: any) => c.id === countryId);
      if (country) return country.name;
    }
    return "Desconocido";
  };

  const getRegionName = (countryId: string, regionId: string): string => {
    for (const continent of continents || []) {
      const country = continent.countries.find((c: any) => c.id === countryId);
      const region = country?.regions.find((r: any) => r.id === regionId);
      if (region) return region.name;
    }
    return "Desconocido";
  };

  const enrichedAlbums = useMemo(() => {
    if (!albums || !continents) return [];

    return albums.map((album: any) => {
      return {
        ...album,
        location: {
          country: getCountryName(album.country_id),
          region: getRegionName(album.country_id, album.region_id),
          spot: surfBreakMap.get(album.surf_break_id) || "Desconocido",
        },
        photoCount: album.photo_count || 0,
        formattedDate: new Intl.DateTimeFormat("es-ES", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        }).format(new Date(album.date)),
        photographer: {
          id: album.user_id,
          name: album.full_name || "Fotógrafo desconocido",
          initials: "F",
          avatar: "/placeholder.svg?height=24&width=24",
        },
        coverImage:
          album.cover_photo?.thumbnail_url || "/placeholder.svg?height=240&width=360",
      };
    });
  }, [albums, continents, surfBreakMap]);

  return {
    albums: enrichedAlbums,
    isLoading: albumsLoading || locationsLoading,
  };
};

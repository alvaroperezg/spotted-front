import { useState } from "react";
import { useContinents } from "@/services/hooks/continents/useContinents";
import { useSurfBreaks } from "@/services/hooks/continents/useSurfBreaks";
import { Select,SelectTrigger,SelectValue,SelectContent,SelectItem } from "@/presentation/components/atoms/Select";

interface SurfBreakSelectorProps {
  onSelect: (value: string) => void;
}

export const SurfBreakSelector = ({ onSelect }: SurfBreakSelectorProps) => {
  
  const [continentId, setContinentId] = useState("");
  const [countryId, setCountryId] = useState("");
  const [regionId, setRegionId] = useState("");
  const [selectedSurfBreakId, setSelectedSurfBreakId] = useState("");
  
  const { data: continents = [] } = useContinents();
  const { data: surfBreaks = [] } = useSurfBreaks(continentId, countryId, regionId);

  const countries =
    continents.find((c: any) => c.id === continentId)?.countries || [];
  const regions =
    countries.find((c: any) => c.id === countryId)?.regions || [];
  const regionSurfBreaks = surfBreaks;

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium">
          Selecciona un continente
        </label>
        <Select
          value={continentId}
          onValueChange={(value) => {
            setContinentId(value);
            setCountryId("");
            setRegionId("");
            onSelect(""); 
          }}
        >
          <SelectTrigger>
            <SelectValue placeholder="Selecciona un continente" />
          </SelectTrigger>
          <SelectContent>
            {continents.map((cont: any) => (
              <SelectItem key={cont.id} value={cont.id}>
                {cont.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {countries.length > 0 && (
        <div>
          <label className="block text-sm font-medium">
            Selecciona un país
          </label>
          <Select
            value={countryId}
            onValueChange={(value) => {
              setCountryId(value);
              setRegionId("");
              onSelect("");
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Selecciona un país" />
            </SelectTrigger>
            <SelectContent>
              {countries.map((c: any) => (
                <SelectItem key={c.id} value={c.id}>
                  {c.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      {regions.length > 0 && (
        <div>
          <label className="block text-sm font-medium">
            Selecciona una región
          </label>
          <Select
            value={regionId}
            onValueChange={(value) => {
              setRegionId(value);
              onSelect("");
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Selecciona una región" />
            </SelectTrigger>
            <SelectContent>
              {regions.map((r: any) => (
                <SelectItem key={r.id} value={r.id}>
                  {r.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      {regionSurfBreaks.length > 0 && (
        <div>
          <label className="block text-sm font-medium">
            Selecciona un surf break
          </label>
          <Select
              value={selectedSurfBreakId}
              onValueChange={(value) => {
                console.log("surfBreak seleccionado:", value);
                setSelectedSurfBreakId(value);
                onSelect(value);
              }}
            >
            <SelectTrigger>
              <SelectValue placeholder="Selecciona un surf break" />
            </SelectTrigger>
            <SelectContent>
              {regionSurfBreaks.map((sb: any) => (
                <SelectItem key={sb.id} value={sb.id}>
                  {sb.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}
    </div>
  );
};

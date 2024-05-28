package it.CampiFlegrei.service;

import it.CampiFlegrei.dao.EarthquakeDAO;
import it.CampiFlegrei.dto.EarthquakeDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class EarthquakeService {

    @Autowired
    private EarthquakeDAO earthquakeDAO;

    private static final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");

    public List<EarthquakeDTO> getRecentEarthquakes() {
        List<EarthquakeDTO> allEarthquakes = earthquakeDAO.getEarthquakeData();
        LocalDateTime now = LocalDateTime.now(ZoneId.of("Europe/Rome"));  // Fuso orario di Roma
        LocalDateTime last24Hours = now.minusHours(24);

        return allEarthquakes.stream()
                .filter(e -> {
                    try {
                        LocalDateTime dateTime = LocalDateTime.parse(e.getPrintdate(), formatter);
                        dateTime = dateTime.plusHours(2);  // Incrementa l'ora di 2 ore
                        e.setPrintdate(dateTime.format(formatter));  // Aggiorna la data nel DTO
                        return dateTime.isAfter(last24Hours);
                    } catch (DateTimeParseException ex) {
                        ex.printStackTrace();
                        return false;
                    }
                })
                .collect(Collectors.toList());
    }

    public int countRecentEarthquakes() {
        List<EarthquakeDTO> recentEarthquakes = getRecentEarthquakes();
        return recentEarthquakes.size();
    }

    private int countEarthquakesOnDay(LocalDate date) {
        List<EarthquakeDTO> allEarthquakes = earthquakeDAO.getEarthquakeData();
        return (int) allEarthquakes.stream()
                .filter(e -> {
                    try {
                        LocalDateTime dateTime = LocalDateTime.parse(e.getPrintdate(), formatter);
                        dateTime = dateTime.plusHours(2);
                        return dateTime.toLocalDate().isEqual(date);
                    } catch (DateTimeParseException ex) {
                        ex.printStackTrace();
                        return false;
                    }
                })
                .count();
    }

    public Map<String, Integer> countEarthquakesLastWeek() {
        Map<String, Integer> counts = new HashMap<>();
        LocalDate today = LocalDate.now(ZoneId.of("Europe/Rome"));

        for (int i = 0; i < 7; i++) {
            LocalDate date = today.minusDays(i);
            int count = countEarthquakesOnDay(date);
            counts.put(date.toString(), count);
        }

        return counts;
    }
}

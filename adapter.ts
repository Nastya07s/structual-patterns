// Adapter Concept Sample Code

interface StockDataProviderInterface {
    printXML(): void
}

class StockDataProvider implements StockDataProviderInterface {
    printXML() {
        console.log('...printXML')
    }
}

interface AnalyticsLibraryInterface {
    printJSON(): void
}

class AnalyticsLibrary implements AnalyticsLibraryInterface {
    printJSON() {
        console.log('...printJSON')
    }
}

class AnalyticsLibraryAdapter implements StockDataProviderInterface {
    // AnalyticsLibrary does not have a printXML, so we can create an adapter

    private analyticsLibrary: AnalyticsLibrary

    constructor() {
        this.analyticsLibrary = new AnalyticsLibrary()
    }

    printXML() {
        console.log('Method called from Adapter. Here you should get data and do some transformations')
        this.analyticsLibrary.printJSON()
    }
}

// The Client
// Before the adapter I need to test the objects class to know which
// method to call.
const items = [new StockDataProvider(), new AnalyticsLibrary()]
items.forEach((item) => {
    if (item instanceof AnalyticsLibrary) {
        item.printJSON()
    } else {
        item.printXML()
    }
})

console.log('\n');

// After creating an adapter for AnalyticsLibrary I can reuse the same method
// signature as StockDataProvider (preferred)
const adapted = [new StockDataProvider(), new AnalyticsLibraryAdapter()]
adapted.forEach((item) => {
    item.printXML()
})